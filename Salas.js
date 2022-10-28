import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { styled, Box, Grid, Paper } from "@mui/system";
import Style from "../assets/css/Css";

export default function ColumnsGrid() {
  return ColumnsGrid()(
    <Box sx={{ flexGrow: 1 }}>
      <Text>Suas Salas</Text>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
