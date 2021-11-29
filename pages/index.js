import "mapbox-gl/dist/mapbox-gl.css";
import Head from "next/head";
import { Container, Stack, Grid, GridItem } from "@chakra-ui/react";

import { MapView, MapControls } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid
        templateColumns="repeat(6, 1fr)"
        h="100%"
        align="stretch"
        gap={0}
        justify="space-between"
      >
        <GridItem colSpan={4}>
          <MapView bg="gray.100" />
        </GridItem>
        <GridItem colSpan={2}>
          <MapControls />
        </GridItem>
      </Grid>
    </>
  );
}
