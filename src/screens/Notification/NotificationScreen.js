import React from "react";
import { Box, Text, VStack, Button } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { markAsRead } from "../../store/slices/notificationSlice";

export default function NotificationScreen() {
  const dispatch = useDispatch();
  const notifs = useSelector((state) => state.notif.list);

  return (
    <VStack space={4} p={4}>
      {notifs.map((n) => (
        <Box
          key={n.id}
          bg={n.read ? "gray.100" : "white"}
          p={4}
          borderRadius={8}
          shadow={1}
        >
          <Text fontWeight="bold">{n.title}</Text>
          <Text>{n.message}</Text>
          {!n.read && (
            <Button mt={2} size="sm" onPress={() => dispatch(markAsRead(n.id))}>
              Mark as Read
            </Button>
          )}
        </Box>
      ))}
    </VStack>
  );
}
