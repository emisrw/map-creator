import {
  Center,
  chakra,
  Flex,
  FlexProps,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";

import { useRouteChangeEffect } from "../../hooks";
import { PageHeader } from "../../components";
import { motion } from "framer-motion";

const variants = {
  default: { opacity: 1 },
  loading: { opacity: 0.1 },
};

export const PageLayout = ({ children, ...props }: FlexProps): JSX.Element => {
  const {
    isOpen: isLoading,
    onOpen: startLoading,
    onClose: stopLoading,
  } = useDisclosure({ defaultIsOpen: false });
  useRouteChangeEffect({
    onStart: startLoading,
    onComplete: stopLoading,
    onError: stopLoading,
  });

  return (
    <>
      <Flex
        className="page-layout"
        flexDir="column"
        minH="100vh"
        maxW="100vw"
        overflow="hidden"
        {...props}
      >
        <PageHeader />
        {isLoading && (
          <Center w="full" top={0} position="fixed" h="100vh" py={6}>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Spinner size="xl" />
            </motion.div>
          </Center>
        )}
        {children && (
          <chakra.div flexGrow={1}>
            <motion.div
              animate={isLoading ? "loading" : "default"}
              variants={variants}
            >
              {children}
            </motion.div>
          </chakra.div>
        )}
      </Flex>
    </>
  );
};
