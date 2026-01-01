import 'package:flutter/material.dart';
import 'package:encode_app/constants/app_colors.dart';

class ProfileDrawer extends StatelessWidget {
  const ProfileDrawer({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: MediaQuery.of(context).size.width * 0.85, // Takes up ~85% of width
      height: double.infinity,
      decoration: const BoxDecoration(
        color: Color(0xFFA68A64), // Brownish color from design
        borderRadius: BorderRadius.only(
          topLeft: Radius.circular(30),
          bottomLeft: Radius.circular(30),
        ),
      ),
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 60),
      child: Column(
        children: [
          // Header
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
               const Text(
                'Hello Pragati,',
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                  color: Colors.black, // Assuming black text on brown
                ),
              ),
              IconButton(
                icon: const Icon(Icons.person_outline, size: 30, color: Colors.black),
                onPressed: () {
                  Navigator.pop(context);
                },
              ),
            ],
          ),
          const SizedBox(height: 50),

          // More Info Button
          _buildDrawerButton("MORE INFO", () {}),
          
          const Spacer(),

          // Help Button
          _buildDrawerButton("HELP", () {}),
          const SizedBox(height: 20),
        ],
      ),
    );
  }

  Widget _buildDrawerButton(String text, VoidCallback onTap) {
    return SizedBox(
      width: double.infinity,
      height: 55,
      child: ElevatedButton(
        style: ElevatedButton.styleFrom(
          backgroundColor: AppColors.cardYellow, // Using the light beige/yellow
          foregroundColor: Colors.black,
          elevation: 2,
          shape: RoundedRectangleBorder(
             borderRadius: BorderRadius.circular(15),
             side: const BorderSide(color: Colors.black12),
          ),
        ),
        onPressed: onTap,
        child: Text(
          text,
          style: const TextStyle(
            fontSize: 18, 
            fontWeight: FontWeight.bold,
            letterSpacing: 0.5,
          ),
        ),
      ),
    );
  }
}
