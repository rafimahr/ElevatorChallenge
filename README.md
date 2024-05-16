Elevator Simulation Project
This project implements an elevator simulation system using TypeScript (or JavaScript) for a building environment. The system includes multiple floors, elevators, and elevator call buttons, simulating real-world elevator behavior within a virtual space.

Overview
The elevator simulation project aims to demonstrate efficient elevator control and management through the following components:

HTML Structure: Visual representation of building floors, elevators, and call buttons.
CSS Styling: Design and layout for a realistic building environment.
JavaScript (or TypeScript) Modules: Modular code for elevator control, floor interactions, and animations.
Elevator Control Algorithm: Algorithm to dispatch elevators, minimize wait times, and optimize elevator usage based on user requests.
Features
Nearest Elevator Selection: Algorithm chooses the closest available elevator to respond to floor requests.
Elevator Movement: Smooth animation of elevators moving between floors using CSS transitions.
Efficient Dispatching: Minimizes wait times by prioritizing elevator dispatch based on proximity to requested floors.
User Interaction: Elevator call buttons trigger elevator movements and simulate passenger interactions.
Realistic Simulation: Sound effects or visual cues indicate elevator arrival and readiness for service.
Elevator Control Algorithm
The main elevator control algorithm focuses on the following key aspects:

Choosing Nearest Elevator:

Determines the closest elevator to respond to a floor request based on current positions.
Calculates distance and selects the most efficient elevator for dispatch.
Elevator Movement Calculation:

Computes travel distance based on the absolute difference between current and target floors.
Initiates smooth elevator movement using CSS transitions for visual representation.
Handling Elevator Arrival:

Pauses elevator movement upon reaching the target floor to simulate door opening.
Triggers sound effects or visual cues to indicate elevator readiness.
