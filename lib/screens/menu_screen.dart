import 'package:flutter/material.dart';
import 'package:encode_app/constants/app_colors.dart';

class MenuScreen extends StatelessWidget {
  const MenuScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20.0),
          child: Column(
            children: [
              const SizedBox(height: 20),
              // Header
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text(
                    'Hello Pragati,',
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                      fontFamily: 'Serif',
                    ),
                  ),
                  IconButton(
                    icon: const Icon(Icons.person_outline, size: 28),
                    onPressed: () => Navigator.pop(context),
                  ),
                ],
              ),
              const SizedBox(height: 40),
              
              // Menu Background Area (darker beige overlay effect)
              Expanded(
                child: Container(
                   width: double.infinity,
                   padding: const EdgeInsets.symmetric(vertical: 40, horizontal: 20),
                   decoration: BoxDecoration(
                     color: const Color(0xFFC1A17A), // Brownish beige
                     borderRadius: BorderRadius.circular(20),
                   ),
                   child: Column(
                     children: [
                       _buildMenuButton("MORE INFO", () {}),
                       const SizedBox(height: 15),
                       _buildMenuButton("HISTORY", () {}),
                       const SizedBox(height: 15),
                       _buildMenuButton("XYZ", () {}),
                       const SizedBox(height: 15),
                       _buildMenuButton("ABC", () {}),
                       
                       const Spacer(),
                       
                       _buildMenuButton("HELP", () {}),
                     ],
                   ),
                ),
              ),
              const SizedBox(height: 20),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildMenuButton(String text, VoidCallback onTap) {
    return SizedBox(
      width: double.infinity,
      height: 50,
      child: ElevatedButton(
        style: ElevatedButton.styleFrom(
          backgroundColor: AppColors.cardYellow, // Light yellow button
          foregroundColor: AppColors.buttonText,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(25),
            side: const BorderSide(color: Colors.black26),
          ),
          elevation: 2,
        ),
        onPressed: onTap,
        child: Text(
          text,
          style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
        ),
      ),
    );
  }
}
