import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home1({ route }) {
    const [searchQuery, setSearchQuery] = useState("");
    const navigation = useNavigation();

    // Extracting email from route params
    //const { email } = route.params;

    // Mock data for categories
    const categories = ["Coffee", "Tea", "Snacks", "Pastries", "Drinks"];

    // Function to handle search
    const handleSearch = () => {
        // Navigate to search results screen with searchQuery
        navigation.navigate("SearchResults", { searchQuery });
    };

    // Function to handle category selection
    const handleCategorySelect = (category) => {
        // Navigate to products screen with selected category
        navigation.navigate("Products", { category });
    };

    return (
        <View className="flex-1">
            {/* Header */}
            <View className="p-4 bg-orange-400">
                <Text className="text-lg mt-3 font-bold italic">Welcome</Text>
                <View className="flex flex-row items-center mt-2">
                    <TextInput
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        placeholder="Search"
                        className="flex-1 border rounded-full border-black-400 p-1"
                    />
                    <TouchableOpacity onPress={handleSearch} className="ml-2 bg-brownish-black rounded-md px-4 py-2">
                        <Text className="text-white">Search</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Categories */}
            <ScrollView horizontal className="px-4 mb-4">
                {categories.map((category, index) => (
                    <TouchableOpacity key={index} onPress={() => handleCategorySelect(category)} className="mr-2 bg-gray-200 rounded-md px-4 py-2">
                        <Text>{category}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Product List */}
            {/* Display list of products */}
        </View>
    );
}
