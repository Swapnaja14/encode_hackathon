import 'package:flutter/material.dart';
import 'package:encode_app/constants/app_colors.dart';
import 'package:encode_app/widgets/profile_drawer.dart';

class SharedBottomNav extends StatelessWidget {
  const SharedBottomNav({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 70,
      decoration: const BoxDecoration(
        color: Color(0xFF3E2723), // Dark Chocolate Brown
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          IconButton(
            icon: const Icon(Icons.home, color: Colors.white, size: 30),
            onPressed: () {
              Navigator.of(context).pushNamedAndRemoveUntil('/', (route) => false);
            },
          ),
          IconButton(
            icon: const Icon(Icons.arrow_back, color: Colors.white, size: 30),
            onPressed: () {
              if (Navigator.canPop(context)) {
                Navigator.pop(context);
              }
            },
          ),
          // Panel Icon - Triggers Drawer usually, or just placeholder
          Builder(
            builder: (context) {
              return IconButton(
                icon: const Icon(Icons.dashboard, color: Colors.white, size: 30),
                onPressed: () {
                   Scaffold.of(context).openEndDrawer();
                },
              );
            }
          ),
        ],
      ),
    );
  }
}
