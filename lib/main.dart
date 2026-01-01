import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart'; // Import
import 'package:encode_app/constants/app_colors.dart';
import 'package:encode_app/screens/home_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Food Info Bot',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        scaffoldBackgroundColor: AppColors.background,
        primaryColor: AppColors.textBlack,
        // Apply Roboto font globally
        textTheme: GoogleFonts.robotoTextTheme(
          Theme.of(context).textTheme,
        ).apply(
          bodyColor: AppColors.textBlack, 
          displayColor: AppColors.textBlack,
        ),
        useMaterial3: true,
      ),
      home: const HomeScreen(),
    );
  }
}
