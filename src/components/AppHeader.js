import React from "react";
import { HStack, Image, IconButton, Icon, Box, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

export default function AppHeader({ navigation }) {
  const unreadCount = useSelector((state) => state.notif.unreadCount);

  return (
    <HStack
      px={4}
      py={3}
      alignItems="center"
      justifyContent="space-between"
      bg="white"
      shadow={2}
    >
      {/* <Image
        source={require("../../assets/images/icon.png")}
        alt="Logo"
        resizeMode="contain"
        width={120}
        height={30}
      /> */}

      <Box>
        <IconButton
          icon={<Icon as={Ionicons} name="notifications-outline" size={6} />}
          onPress={() => navigation.navigate("Notifications")}
        />
        {unreadCount > 0 && (
          <Box
            position="absolute"
            top={0}
            right={0}
            bg="red.500"
            rounded="full"
            width={4}
            height={4}
            justifyContent="center"
            alignItems="center"
          >
            <Text color="white" fontSize={10} fontWeight="bold">
              {unreadCount}
            </Text>
          </Box>
        )}
      </Box>
    </HStack>
  );
}
