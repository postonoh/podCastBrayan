import { StatusBar, StatusBarStyle } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import React from "react";
/**
 * Provide a simply way to change the status bar
 * when the current screen focus
 * @param style 
 * 
 * @param animated 
 */
const useStatusBar = (style: StatusBarStyle, animated = true) => {
    useFocusEffect(
        React.useCallback(() => {
            StatusBar.setBarStyle(style, animated)
        }, []),
    )
}

export default useStatusBar;