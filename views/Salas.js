import React, {useState,useEffect} from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View, StyleSheet} from 'react-native';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Style from '../assets/css/Css'

        export default function ColumnsGrid() {
                    return ColumnsGrid()(          
                    <Box sx={{ flexGrow: 1 }}>
                        <text><h1>Suas Salas</h1></text>
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

                