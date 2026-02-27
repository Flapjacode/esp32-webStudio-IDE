# Esp32-Development-Sim-Tool

## Project Overview
This web application provides an interactive interface for configuring ESP-32 microcontroller pins. The tool assists developers in properly setting up their ESP-32 projects by generating boilerplate code based on their pin configuration selections.

## Key Features
Visual Pin Selection Interface: Interactive representation of all ESP-32 pins with clear labeling

Pin Configuration System:

<br><img width="491" height="550" alt="image" src="https://github.com/user-attachments/assets/2100f568-fa3c-4fe8-9ee8-1ecfa73e0bff" />

## Select from multiple functions (GPIO, I2C, SPI, UART, etc.)

Configure pin modes (digital input/output, analog, etc.)

Add custom names and descriptions for each pin

Code Generation:

<br><img width="450" height="500" alt="image" src="https://github.com/user-attachments/assets/27d4a9ac-6c92-49a4-a83f-f6de98a799c8" />

## Automatic generation of initialization code for individual pins

Complete setup function template for all configured pins

 ## Validation of pin assignments for conflicts


<br><img width="588" height="239" alt="image" src="https://github.com/user-attachments/assets/ece7ba8e-4e1c-4019-8b73-14bf2e33796e" />

<p>Integrated Development Environment:

Built-in terminal for immediate feedback

Code validation before deployment

Support for common ESP-IDF and Arduino frameworks






# ESP32 Pin Configuration Simulator

## Project Overview

A web-based ESP32 pin configuration tool that allows developers to:
- Visually configure ESP32 pins with different modes (GPIO, I2C, SPI, UART)
- Generate Arduino-compatible code templates
- Validate code syntax before deployment
- Test configurations without physical hardware

## Features

- **Interactive Pin Configuration**:
  - Visual representation of ESP32 pins
  - Pin-specific configuration options
  - Custom variable naming and descriptions

- **Code Generation**:
  - Automatic template generation
  - Setup/Loop structure
  - Pin mode initialization

- **Code Validation**:
  - Syntax checking
  - Pin usage verification
  - Common ESP32 function detection

## Installation

### Web Version (No Installation Required)
The application runs directly in modern browsers:
1. Open `index.html` in your preferred browser
2. Start configuring your ESP32 pins

### Development Setup

1. Clone the repository:
```bash
git clone https://github.com/Flapjacode/Esp32-Sim-Tool.git
cd Esp32-Sim-Tool
```

2. Install dependencies (if using Node.js server):
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open in browser:
```bash
http://localhost:3000
```

## Usage

1. **Configure Pins**:
   - Click on any ESP32 pin to select it
   - Choose the appropriate mode from the dropdown
   - Assign a variable name and description

2. **Generate Code**:
   - Click "Generate Template" to create starter code
   - The editor will populate with properly configured pin setups

3. **Validate Code**:
   - Click "Validate Code" to check for common errors
   - The output panel will show validation results

4. **Export Code**:
   - Copy the generated code directly from the editor
   - Paste into your Arduino IDE or PlatformIO project

## Project Structure

```
Esp32-Sim-Tool/
├── index.html          # Main application file
├── README.md           # Project documentation
├── assets/             # Static assets (CSS, JS, images)
│   ├── styles.css      # Additional styles
│   └── scripts.js      # Additional JavaScript
└── package.json        # Node.js dependencies (optional)
```

## Dependencies

- Modern web browser (Chrome, Firefox, Edge, Safari)
- Node.js (optional for local development server)

## Sources and Attributions

## Intellectual Property Statement

The source code contained in this repository represents original work developed as an educational IDE web interface for ESP32 microcontroller development. All code is the intellectual property of the project author except where explicitly attributed to third-party entities as detailed below.

## Educational Purpose

This project is intended solely as an educational tool for teaching and learning ESP32 microcontroller development using the Arduino programming framework. It is designed to facilitate understanding of embedded systems programming and hardware interaction.

## Third-Party Attributions

### Espressif Systems

ESP32 microcontroller platform, architecture, and related trademarks are the intellectual property of Espressif Systems (Shanghai) Co., Ltd.

<img src="https://www.espressif.com/sites/all/themes/espressif/images/logo-guidelines/primary-vertical-logo.png" width="200"/>

**Copyright © 2025 Espressif Systems (Shanghai) Co., Ltd. All rights reserved.**

All references to "ESP32," "ESP32-C3," and related Espressif products are used in accordance with Espressif's trademark guidelines for educational and reference purposes.

### Arduino

This project utilizes the Arduino programming framework and development paradigm. Arduino is used under the terms of its respective licenses.

**Arduino™ and the Arduino logo are trademarks of Arduino AG.**
<img src="https://www.arduino.cc/wiki/7c482b8fdff660243523a8f9127c4ac0/logos.svg" alt="logos"/>

**Copyright © 2025 Arduino AG. All rights reserved.**

The Arduino framework is used in accordance with the GNU Lesser General Public License (LGPL) and Creative Commons licensing terms as applicable.

### Technical Documentation Sources

#### Xecor Electronics
ESP32 pinout diagrams and technical documentation provided by Xecor Electronics.

**Source:** [Xecor ESP32 Pinout Diagram](https://www.xecor.com/blog/esp32-pinout-diagram)

**Copyright © 2026 Xecor Co., Ltd. All rights reserved.**

Technical diagrams used with attribution for educational reference purposes.

#### Micro Robotics
ESP32-C3 Super Mini technical specifications and pinout diagrams provided by Micro Robotics.

**Source:** [Micro Robotics ESP32-C3-SMINI Documentation](https://www.robotics.org.za/ESP32-C3-SMINI-V2)

**Copyright © 2026 Micro Robotics (Pty) Ltd. All rights reserved.**

Documentation used with attribution for educational and reference purposes.

---

## License

<a href="https://flapjacode.github.io/Esp32-Sim-Tool/">ESP32 IDE SimTool</a> © 2025 by <a href="https://github.com/Flapjacode">Matthew Shannon</a> is licensed under <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer">Creative Commons Attribution 4.0 International</a> <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt="">

### License Summary

This work is licensed under the Creative Commons Attribution 4.0 International License. 

**You are free to:**
- **Share** — copy and redistribute the material in any medium or format
- **Adapt** — remix, transform, and build upon the material for any purpose, even commercially

**Under the following terms:**
- **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.

**No additional restrictions** — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.

### Full License Text

To view a copy of this license, visit:
[https://creativecommons.org/licenses/by/4.0/legalcode](https://creativecommons.org/licenses/by/4.0/legalcode)

---

## Disclaimer

### Educational Use
This software is provided for educational and learning purposes only. The author and contributors make no warranties regarding the fitness of this software for any particular purpose.

### Hardware Interaction
Users assume all responsibility for the proper and safe operation of hardware when using this software. Always follow proper safety protocols when working with electronic components and embedded systems.

### Third-Party Resources
While every effort has been made to properly attribute third-party resources, users are responsible for ensuring compliance with all applicable licenses and terms of use for any external resources or libraries they choose to incorporate.

### No Warranty
THIS SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

## Contributing

Contributions to this project are welcome and encouraged. By contributing, you agree that your contributions will be licensed under the same Creative Commons Attribution 4.0 International License that covers this project.

### Contribution Guidelines

When contributing to this repository, please:

1. **Maintain Code Quality**
   - Ensure all code follows the existing style and conventions
   - Write clear, well-documented code with appropriate comments

2. **Testing**
   - Include appropriate tests for new functionality
   - Verify that existing functionality is not broken

3. **Documentation**
   - Update documentation to reflect any changes or new features
   - Include usage examples where applicable

4. **Attribution**
   - Properly attribute any third-party code or resources
   - Include appropriate copyright notices

5. **Pull Requests**
   - Submit pull requests with clear, descriptive titles
   - Provide detailed descriptions of changes and their purpose
   - Reference any related issues

---

## Support and Contact

### Issue Reporting
For bug reports, feature requests, or technical issues, please open an issue in the [GitHub repository](https://github.com/Flapjacode/esp32-simulator/issues).

When reporting issues, please include:
- A clear description of the problem
- Steps to reproduce the issue
- Expected vs. actual behavior
- System information and environment details
- Relevant code snippets or error messages

### Community Support
- **GitHub Discussions:** For general questions and community interaction
- **Issue Tracker:** For bug reports and feature requests

### Project Maintainer
For direct inquiries regarding licensing, collaboration, or other matters, contact the project maintainer through the [GitHub profile](https://github.com/Flapjacode).

---

## Acknowledgments

Special thanks to the open-source community and all contributors who have helped make this educational tool possible. This project stands on the shoulders of the Arduino community, Espressif Systems' excellent documentation, and the countless educators and developers who share their knowledge freely.

---

**Last Updated:** February 2026