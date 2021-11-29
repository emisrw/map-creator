import { Flex, Stack } from "@chakra-ui/react";
import { useMapbox } from "../../../hooks/useMapbox";

export const MapView = (props): JSX.Element => {
  const { mapContainerRef } = useMapbox();

  return (
    <Flex align="center"  justify="center" h={'calc(100vh - 60px)'} {...props}>
      <Stack
        p={4}
        h={400}
        w={400}
        ref={mapContainerRef}
        bg="white"
        className="map-container"
      />
    </Flex>
  );
};
