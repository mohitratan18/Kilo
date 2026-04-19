import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  LayoutChangeEvent,
} from "react-native";

interface ScrollSelectorProps {
  min: number;
  max: number;
  initialValue: number;
  onValueChange: (value: number) => void;
  orientation: "horizontal" | "vertical";
  itemSize?: number;
  containerSize?: number;
  measureLines?: boolean;
  unit?: string;
}

export function ScrollSelector({
  min,
  max,
  initialValue,
  onValueChange,
  orientation,
  itemSize = 80,
  containerSize = 220,
  measureLines = false,
  unit,
}: ScrollSelectorProps) {
  const scrollViewRef = useRef<ScrollView>(null);
  const [selectedValue, setSelectedValue] = useState(initialValue);
  const [layoutSize, setLayoutSize] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const items = Array.from({ length: max - min + 1 }, (_, i) => min + i);
  const isHorizontal = orientation === "horizontal";
  
  // Dynamic center offset based on the actual layout size
  const centerOffset = (layoutSize - itemSize) / 2;

  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    const size = isHorizontal ? width : height;
    setLayoutSize(size);
    setIsReady(true);
  };

  useEffect(() => {
    if (isReady) {
      // Small delay to ensure layout is fully calculated before initial scroll
      const timer = setTimeout(() => {
        scrollToValue(initialValue, false);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isReady]);

  const scrollToValue = (value: number, animated = true) => {
    const index = value - min;
    const offset = index * itemSize;
    if (isHorizontal) {
      scrollViewRef.current?.scrollTo({ x: offset, animated });
    } else {
      scrollViewRef.current?.scrollTo({ y: offset, animated });
    }
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offset = isHorizontal ? event.nativeEvent.contentOffset.x : event.nativeEvent.contentOffset.y;
    const index = Math.round(offset / itemSize);
    const value = items[Math.max(0, Math.min(items.length - 1, index))];
    if (value !== selectedValue) {
      setSelectedValue(value);
      onValueChange(value);
    }
  };

  const renderItem = (item: number) => {
    const isActive = item === selectedValue;
    return (
      <View
        key={item}
        style={{
          width: isHorizontal ? itemSize : "100%",
          height: isHorizontal ? "100%" : itemSize,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: 'row',
        }}
      >
        <View
          className="flex-row justify-around items-center"
        >
          <Text className={`font-headline font-bold ${isActive ? "text-primary text-5xl" : "text-on-surface-variant/20 text-2xl"
            }`}>
            {item}
          </Text>
          {unit ? <Text className={`${isActive ? "text-primary text-sm" : "text-on-surface-variant/20 text-xs"}`}>{unit}</Text> : null}
        </View>
      </View>
    );
  };

  return (
    <View 
      onLayout={onLayout}
      style={{ 
        height: isHorizontal ? 120 : containerSize, 
        width: "100%",
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Background Ruler Ticks - Conditional */}
      {measureLines && (
        <View 
          pointerEvents="none" 
          className="absolute inset-0 flex-row justify-around items-center opacity-10"
        >
          {isHorizontal ? (
            [...Array(15)].map((_, i) => (
              <View key={i} className="w-0.5 h-8 bg-on-surface" />
            ))
          ) : (
            <View className="flex-col justify-around h-full items-center">
              {[...Array(8)].map((_, i) => (
                <View key={i} className="h-0.5 w-8 bg-on-surface" />
              ))}
            </View>
          )}
        </View>
      )}

      {/* Selection Box / Indicator */}
      {isReady && (
        <View 
          pointerEvents="none"
          className="absolute border-primary/20 bg-primary/5"
          style={{
            width: isHorizontal ? itemSize * 1.5 : "80%",
            height: isHorizontal ? "80%" : itemSize * 1.2,
            borderWidth: 2,
            borderRadius: 24,
            zIndex: 0,
          }}
        />
      )}

      {isReady && (
        <ScrollView
          ref={scrollViewRef}
          horizontal={isHorizontal}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          snapToInterval={itemSize}
          snapToAlignment="start"
          decelerationRate="fast"
          onScroll={handleScroll}
          scrollEventThrottle={16}
          contentContainerStyle={{
            paddingHorizontal: isHorizontal ? centerOffset : 0,
            paddingVertical: isHorizontal ? 0 : centerOffset,
          }}
        >
          {items.map(renderItem)}
        </ScrollView>
      )}

      {/* Decorative Depth Overlays */}
      {!isHorizontal && (
        <>
          <View pointerEvents="none" className="absolute inset-x-0 top-0 h-10 bg-surface-container-low/60" />
          <View pointerEvents="none" className="absolute inset-x-0 bottom-0 h-10 bg-surface-container-low/60" />
        </>
      )}
    </View>
  );
}
