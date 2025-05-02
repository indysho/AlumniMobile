// StackNavigation.js ((this is for user display))

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AfterLogin from './AfterLogin'; // Ganti dengan path yang sesuai
import ProfileAlumni from './ProfileAlumni'; // Ganti dengan path yang sesuai
import FormTS from './FormTS'; // Ganti dengan path yang sesuai
import LaporanTS from './LaporanTS'; // Ganti dengan path yang sesuai


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
        name="Home" 
        component={AfterLogin} 
        options={{ headerShown: false }} // Hide header on AfterLogin screen
      />
      <Drawer.Screen 
        name="Profile Alumni" 
        component={ProfileAlumni} 
        options={{ headerShown: false }} // Hide header on ProfileAlumni screen
      />
      <Drawer.Screen 
        name="Form TS" 
        component={FormTS} 
        options={{ headerShown: false }} // Hide header on FormTS screen
      />
      <Drawer.Screen 
        name="Laporan TS" 
        component={LaporanTS} 
        options={{ headerShown: false }} // Hide header on FormTS screen
      />
    </Drawer.Navigator>
  );
}

