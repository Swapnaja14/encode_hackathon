import 'package:flutter/material.dart';
import 'package:encode_app/constants/app_colors.dart';
import 'package:encode_app/screens/detail_screen.dart';
import 'package:encode_app/widgets/shared_bottom_nav.dart';
import 'package:encode_app/widgets/profile_drawer.dart';

class AnalysisScreen extends StatelessWidget {
  final String query;
  
  const AnalysisScreen({super.key, required this.query});

  @override
  Widget build(BuildContext context) {
    // Mock Data for "Rice, Tomato, etc."
    final List<Map<String, dynamic>> ingredients = [
      {
        'header': '1. Tomato',
        'desc': 'A juicy fruit rich in vitamin C that boosts immunity and skin health.',
        'color': AppColors.lemonYellow,
      },
      {
        'header': '2. Onion',
        'desc': 'A flavorful bulb that aids digestion and helps regulate blood sugar.',
        'color': AppColors.lemonYellow, // Example
      },
       {
        'header': '1. Tomato',
        'desc': 'A juicy fruit rich in vitamin C that boosts immunity and skin health.',
        'color': AppColors.lemonYellow, 
      },
      {
        'header': '2. Onion',
        'desc': 'A flavorful bulb that aids digestion and helps regulate blood sugar.',
        'color': AppColors.lemonYellow,
      },
    ];

    return Scaffold(
      backgroundColor: AppColors.background,
      endDrawer: const ProfileDrawer(),
      bottomNavigationBar: const SharedBottomNav(),
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
                    ),
                  ),
                  Builder(
                    builder: (context) {
                      return IconButton(
                        icon: const Icon(Icons.person_outline, size: 28),
                        onPressed: () => Scaffold.of(context).openEndDrawer(),
                      );
                    }
                  ),
                ],
              ),
              const SizedBox(height: 20),

              // Query Box
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: Colors.black12),
                ),
                child: const Text(
                  "Rice, Tomato, Onion, Paneer,\nTurmeric, ABCD 1010001, XYZ\n100099090, GUIUIUI,\nXYZZZZZ.",
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                ),
              ),
              const SizedBox(height: 20),

              // Analysis Results List
              Expanded(
                child: ListView.builder(
                  itemCount: ingredients.length,
                  itemBuilder: (context, index) {
                    final item = ingredients[index];
                    return GestureDetector(
                      onTap: () {
                        // Enlarge / Go to Detail Screen
                        Navigator.push(
                          context,
                          MaterialPageRoute(builder: (_) => const DetailScreen()),
                        );
                      },
                      child: Container(
                        margin: const EdgeInsets.only(bottom: 16),
                        padding: const EdgeInsets.all(16),
                        decoration: BoxDecoration(
                          color: item['color'],
                          borderRadius: BorderRadius.circular(16),
                          border: Border.all(color: Colors.black12),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              item['header'],
                              style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                            ),
                            const SizedBox(height: 4),
                            Text(
                              item['desc'],
                              style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 14),
                            ),
                          ],
                        ),
                      ),
                    );
                  },
                ),
              ),
              
              const SizedBox(height: 10),
              
              // Bottom Search Bar
               Container(
                decoration: BoxDecoration(
                   color: Colors.white,
                   borderRadius: BorderRadius.circular(30),
                   border: Border.all(color: Colors.black12),
                ),
                padding: const EdgeInsets.symmetric(horizontal: 16),
                child: Row(
                  children: [
                    const Icon(Icons.search, color: Colors.grey),
                    const SizedBox(width: 10),
                     const Expanded(
                      child: TextField(
                        decoration: InputDecoration(
                          hintText: "Search",
                          border: InputBorder.none,
                        ),
                      ),
                    ),
                    IconButton(
                      icon: const Icon(Icons.camera_alt, color: Colors.black54),
                      onPressed: () {},
                    ),
                    IconButton(
                      icon: const Icon(Icons.add),
                      onPressed: () {
                          // Action
                      },
                    )
                  ],
                ),
              ),
              const SizedBox(height: 20),
            ],
          ),
        ),
      ),
    );
  }
}
