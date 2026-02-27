// ESP32 Board Definitions
const boardDefinitions = {
    'esp32-wroom': {
        name: 'ESP32 WROOM (DevKit)',
        pins: {
            0: { name: 'GPIO0', type: 'Boot/Flash', capabilities: ['Digital I/O', 'PWM', 'Boot Pin'] },
            1: { name: 'GPIO1/TX0', type: 'UART', capabilities: ['UART TX', 'Digital I/O'] },
            2: { name: 'GPIO2', type: 'Boot/Flash', capabilities: ['Digital I/O', 'PWM', 'Boot Pin', 'LED'] },
            3: { name: 'GPIO3/RX0', type: 'UART', capabilities: ['UART RX', 'Digital I/O'] },
            4: { name: 'GPIO4', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'Touch'] },
            5: { name: 'GPIO5', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'SPI CS'] },
            12: { name: 'GPIO12', type: 'Touch', capabilities: ['Digital I/O', 'PWM', 'Touch', 'ADC2'] },
            13: { name: 'GPIO13', type: 'Touch', capabilities: ['Digital I/O', 'PWM', 'Touch', 'ADC2'] },
            14: { name: 'GPIO14', type: 'Touch', capabilities: ['Digital I/O', 'PWM', 'Touch', 'ADC2'] },
            15: { name: 'GPIO15', type: 'Touch', capabilities: ['Digital I/O', 'PWM', 'Touch', 'ADC2'] },
            16: { name: 'GPIO16/RX2', type: 'UART', capabilities: ['UART RX', 'Digital I/O', 'PWM'] },
            17: { name: 'GPIO17/TX2', type: 'UART', capabilities: ['UART TX', 'Digital I/O', 'PWM'] },
            18: { name: 'GPIO18/SCK', type: 'SPI', capabilities: ['SPI SCK', 'Digital I/O', 'PWM'] },
            19: { name: 'GPIO19/MISO', type: 'SPI', capabilities: ['SPI MISO', 'Digital I/O', 'PWM'] },
            21: { name: 'GPIO21/SDA', type: 'I2C', capabilities: ['I2C SDA', 'Digital I/O', 'PWM'] },
            22: { name: 'GPIO22/SCL', type: 'I2C', capabilities: ['I2C SCL', 'Digital I/O', 'PWM'] },
            23: { name: 'GPIO23/MOSI', type: 'SPI', capabilities: ['SPI MOSI', 'Digital I/O', 'PWM'] },
            25: { name: 'GPIO25', type: 'Analog', capabilities: ['Digital I/O', 'PWM', 'DAC1', 'ADC2'] },
            26: { name: 'GPIO26', type: 'Analog', capabilities: ['Digital I/O', 'PWM', 'DAC2', 'ADC2'] },
            27: { name: 'GPIO27', type: 'Touch', capabilities: ['Digital I/O', 'PWM', 'Touch', 'ADC2'] },
            32: { name: 'GPIO32', type: 'Touch', capabilities: ['Digital I/O', 'PWM', 'Touch', 'ADC1'] },
            33: { name: 'GPIO33', type: 'Touch', capabilities: ['Digital I/O', 'PWM', 'Touch', 'ADC1'] },
            34: { name: 'GPIO34', type: 'Input Only', capabilities: ['Analog Input', 'ADC1'] },
            35: { name: 'GPIO35', type: 'Input Only', capabilities: ['Analog Input', 'ADC1'] },
            36: { name: 'GPIO36/VP', type: 'Input Only', capabilities: ['Analog Input', 'ADC1'] },
            39: { name: 'GPIO39/VN', type: 'Input Only', capabilities: ['Analog Input', 'ADC1'] }
        }
    },
    
    'esp32-s3': {
        name: 'ESP32-S3',
        pins: {
            0: { name: 'GPIO0', type: 'Boot', capabilities: ['Digital I/O', 'PWM', 'Boot Pin'] },
            1: { name: 'GPIO1', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            2: { name: 'GPIO2', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            3: { name: 'GPIO3', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            4: { name: 'GPIO4', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            5: { name: 'GPIO5', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            6: { name: 'GPIO6', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            7: { name: 'GPIO7', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            8: { name: 'GPIO8', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            9: { name: 'GPIO9', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            10: { name: 'GPIO10', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            11: { name: 'GPIO11', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC2'] },
            12: { name: 'GPIO12', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC2'] },
            13: { name: 'GPIO13', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC2'] },
            14: { name: 'GPIO14', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC2'] },
            15: { name: 'GPIO15', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC2'] },
            16: { name: 'GPIO16', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC2'] },
            17: { name: 'GPIO17', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC2'] },
            18: { name: 'GPIO18', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC2'] },
            19: { name: 'GPIO19', type: 'USB', capabilities: ['Digital I/O', 'PWM', 'USB D-'] },
            20: { name: 'GPIO20', type: 'USB', capabilities: ['Digital I/O', 'PWM', 'USB D+'] },
            21: { name: 'GPIO21', type: 'Digital', capabilities: ['Digital I/O', 'PWM'] },
            35: { name: 'GPIO35/SPI MISO', type: 'SPI', capabilities: ['Digital I/O', 'PWM', 'SPI MISO'] },
            36: { name: 'GPIO36/SPI SCK', type: 'SPI', capabilities: ['Digital I/O', 'PWM', 'SPI SCK'] },
            37: { name: 'GPIO37/SPI MOSI', type: 'SPI', capabilities: ['Digital I/O', 'PWM', 'SPI MOSI'] },
            38: { name: 'GPIO38/SPI CS', type: 'SPI', capabilities: ['Digital I/O', 'PWM', 'SPI CS'] },
            39: { name: 'GPIO39', type: 'Digital', capabilities: ['Digital I/O', 'PWM'] },
            40: { name: 'GPIO40', type: 'Digital', capabilities: ['Digital I/O', 'PWM'] },
            41: { name: 'GPIO41', type: 'Digital', capabilities: ['Digital I/O', 'PWM'] },
            42: { name: 'GPIO42', type: 'Digital', capabilities: ['Digital I/O', 'PWM'] },
            43: { name: 'GPIO43/TX0', type: 'UART', capabilities: ['Digital I/O', 'UART TX'] },
            44: { name: 'GPIO44/RX0', type: 'UART', capabilities: ['Digital I/O', 'UART RX'] },
            45: { name: 'GPIO45', type: 'Digital', capabilities: ['Digital I/O', 'PWM'] },
            46: { name: 'GPIO46', type: 'Digital', capabilities: ['Digital I/O', 'PWM'] },
            47: { name: 'GPIO47', type: 'Digital', capabilities: ['Digital I/O', 'PWM'] },
            48: { name: 'GPIO48/RGB LED', type: 'LED', capabilities: ['Digital I/O', 'PWM', 'RGB LED'] }
        }
    },
    
    'esp32-c3': {
        name: 'ESP32-C3 (DevKit)',
        pins: {
            0: { name: 'GPIO0', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            1: { name: 'GPIO1', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            2: { name: 'GPIO2', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            3: { name: 'GPIO3', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            4: { name: 'GPIO4', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            5: { name: 'GPIO5', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC2'] },
            6: { name: 'GPIO6/SPI SCK', type: 'SPI', capabilities: ['Digital I/O', 'PWM', 'SPI SCK'] },
            7: { name: 'GPIO7/SPI MOSI', type: 'SPI', capabilities: ['Digital I/O', 'PWM', 'SPI MOSI'] },
            8: { name: 'GPIO8', type: 'Digital', capabilities: ['Digital I/O', 'PWM'] },
            9: { name: 'GPIO9/Boot', type: 'Boot', capabilities: ['Digital I/O', 'PWM', 'Boot Pin'] },
            10: { name: 'GPIO10', type: 'Digital', capabilities: ['Digital I/O', 'PWM'] },
            18: { name: 'GPIO18/USB D-', type: 'USB', capabilities: ['Digital I/O', 'USB D-'] },
            19: { name: 'GPIO19/USB D+', type: 'USB', capabilities: ['Digital I/O', 'USB D+'] },
            20: { name: 'GPIO20/RX', type: 'UART', capabilities: ['Digital I/O', 'UART RX'] },
            21: { name: 'GPIO21/TX', type: 'UART', capabilities: ['Digital I/O', 'UART TX'] }
        }
    },
    
    'esp32-c3-mini': {
        name: 'ESP32-C3 Super Mini',
        pins: {
            0: { name: 'GPIO0', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            1: { name: 'GPIO1/TFT RST', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            2: { name: 'GPIO2/TFT DC', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            3: { name: 'GPIO3/BTN UP', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            4: { name: 'GPIO4/BTN OK', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            5: { name: 'GPIO5/BTN DOWN', type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC2'] },
            6: { name: 'GPIO6/SPI SCK', type: 'SPI', capabilities: ['Digital I/O', 'PWM', 'SPI SCK'] },
            7: { name: 'GPIO7/SPI MOSI', type: 'SPI', capabilities: ['Digital I/O', 'PWM', 'SPI MOSI'] },
            8: { name: 'GPIO8/LED', type: 'LED', capabilities: ['Digital I/O', 'PWM', 'Built-in LED'] },
            9: { name: 'GPIO9/Boot', type: 'Boot', capabilities: ['Digital I/O', 'PWM', 'Boot Button'] },
            10: { name: 'GPIO10/TFT CS', type: 'SPI', capabilities: ['Digital I/O', 'PWM', 'SPI CS'] },
            20: { name: 'GPIO20', type: 'Digital', capabilities: ['Digital I/O', 'PWM'] },
            21: { name: 'GPIO21', type: 'Digital', capabilities: ['Digital I/O', 'PWM'] }
        }
    }
};

let currentBoard = 'esp32-wroom';
let selectedPin = null;
let pinConfigurations = {};

// Initialize the application
function initializeApp() {
    createBoardSelector();
    createPinDiagram();
}

// Create board selector dropdown
function createBoardSelector() {
    const selector = document.getElementById('boardSelector');
    if (!selector) {
        // Create selector if it doesn't exist
        const header = document.querySelector('.header') || document.querySelector('header') || document.body;
        const selectorDiv = document.createElement('div');
        selectorDiv.className = 'board-selector';
        selectorDiv.innerHTML = `
            <label for="boardSelect">Select Board:</label>
            <select id="boardSelect" onchange="changeBoard(this.value)">
                <option value="esp32-wroom">ESP32 WROOM (DevKit)</option>
                <option value="esp32-s3">ESP32-S3</option>
                <option value="esp32-c3">ESP32-C3 (DevKit)</option>
                <option value="esp32-c3-mini">ESP32-C3 Super Mini</option>
            </select>
        `;
        if (header.tagName === 'HEADER' || header.className.includes('header')) {
            header.appendChild(selectorDiv);
        } else {
            document.body.insertBefore(selectorDiv, document.body.firstChild);
        }
    }
}

// Change board and refresh pin diagram
function changeBoard(boardType) {
    currentBoard = boardType;
    pinConfigurations = {}; // Reset configurations when changing boards
    selectedPin = null;
    createPinDiagram();
    document.getElementById('pinConfig').innerHTML = '<p>Select a pin to configure</p>';
}

// Create the ESP32 pin diagram
function createPinDiagram() {
    const diagram = document.getElementById('pinDiagram');
    diagram.innerHTML = '';
    
    const board = boardDefinitions[currentBoard];
    const boardTitle = document.createElement('h3');
    boardTitle.textContent = board.name;
    boardTitle.style.marginBottom = '15px';
    boardTitle.style.textAlign = 'center';
    diagram.appendChild(boardTitle);

    Object.entries(board.pins).forEach(([pinNumber, pinData]) => {
        const pinButton = document.createElement('div');
        pinButton.className = 'pin-button';
        pinButton.onclick = () => selectPin(pinNumber);
        pinButton.innerHTML = `
            <div class="pin-name">${pinData.name}</div>
            <div class="pin-type">${pinData.type}</div>
        `;
        diagram.appendChild(pinButton);
    });
}

// Select a pin and show its configuration options
function selectPin(pinNumber) {
    // Remove previous selection
    document.querySelectorAll('.pin-button').forEach(btn => btn.classList.remove('selected'));
    // Select current pin
    event.target.closest('.pin-button').classList.add('selected');
    selectedPin = pinNumber;
    showPinConfiguration(pinNumber);
}

// Show configuration options for selected pin
function showPinConfiguration(pinNumber) {
    const board = boardDefinitions[currentBoard];
    const pinData = board.pins[pinNumber];
    const configPanel = document.getElementById('pinConfig');
    
    let configHTML = `
        <div class="config-section">
            <h4>Pin ${pinData.name} Configuration</h4>
            <div class="input-group">
                <label>Pin Mode:</label>
                <select id="pinMode_${pinNumber}" onchange="updatePinConfig(${pinNumber})">
                    <option value="">Select Mode...</option>
    `;
    
    // Add appropriate options based on pin capabilities
    pinData.capabilities.forEach(capability => {
        switch(capability) {
            case 'Digital I/O':
                configHTML += '<option value="INPUT">Digital Input</option>';
                configHTML += '<option value="OUTPUT">Digital Output</option>';
                configHTML += '<option value="INPUT_PULLUP">Input with Pullup</option>';
                break;
            case 'PWM':
                configHTML += '<option value="PWM">PWM Output</option>';
                break;
            case 'ADC1':
            case 'ADC2':
                configHTML += '<option value="ANALOG">Analog Input</option>';
                break;
            case 'SPI SCK':
                configHTML += '<option value="SPI_SCK">SPI Clock</option>';
                break;
            case 'SPI MISO':
                configHTML += '<option value="SPI_MISO">SPI Master In</option>';
                break;
            case 'SPI MOSI':
                configHTML += '<option value="SPI_MOSI">SPI Master Out</option>';
                break;
            case 'SPI CS':
                configHTML += '<option value="SPI_CS">SPI Chip Select</option>';
                break;
            case 'I2C SDA':
                configHTML += '<option value="I2C_SDA">I2C Data</option>';
                break;
            case 'I2C SCL':
                configHTML += '<option value="I2C_SCL">I2C Clock</option>';
                break;
            case 'UART TX':
                configHTML += '<option value="UART_TX">UART Transmit</option>';
                break;
            case 'UART RX':
                configHTML += '<option value="UART_RX">UART Receive</option>';
                break;
            case 'Built-in LED':
                configHTML += '<option value="LED">Built-in LED</option>';
                break;
            case 'Boot Pin':
            case 'Boot Button':
                configHTML += '<option value="BOOT">Boot Button</option>';
                break;
        }
    });
    
    configHTML += `
                </select>
            </div>
            <div class="input-group">
                <label>Variable Name:</label>
                <input type="text" id="varName_${pinNumber}" placeholder="e.g., ledPin, buttonPin" onchange="updatePinConfig(${pinNumber})">
            </div>
            <div class="input-group">
                <label>Description:</label>
                <input type="text" id="description_${pinNumber}" placeholder="What is connected to this pin?" onchange="updatePinConfig(${pinNumber})">
            </div>
        </div>
    `;
    
    configPanel.innerHTML = configHTML;
}

// Update pin configuration
function updatePinConfig(pinNumber) {
    const pinMode = document.getElementById(`pinMode_${pinNumber}`).value;
    const varName = document.getElementById(`varName_${pinNumber}`).value;
    const description = document.getElementById(`description_${pinNumber}`).value;
    
    const board = boardDefinitions[currentBoard];
    pinConfigurations[pinNumber] = {
        pin: board.pins[pinNumber],
        mode: pinMode,
        varName: varName,
        description: description
    };
}

// Generate template code based on pin configurations
function generateTemplate() {
    const board = boardDefinitions[currentBoard];
    let templateCode = `// Auto-generated ${board.name} code template\n`;
    templateCode += `// Board: ${board.name}\n\n`;
    
    // Add pin definitions
    Object.entries(pinConfigurations).forEach(([pinNumber, config]) => {
        if (config.varName && config.mode) {
            templateCode += `const int ${config.varName} = ${pinNumber}; // ${config.description || config.pin.name}\n`;
        }
    });
    
    templateCode += '\nvoid setup() {\n';
    templateCode += '  Serial.begin(115200);\n\n';
    
    // Add pin mode configurations
    Object.entries(pinConfigurations).forEach(([pinNumber, config]) => {
        if (config.varName && config.mode) {
            switch(config.mode) {
                case 'INPUT':
                case 'OUTPUT':
                case 'INPUT_PULLUP':
                    templateCode += `  pinMode(${config.varName}, ${config.mode});\n`;
                    break;
                case 'PWM':
                    if (currentBoard.includes('c3')) {
                        templateCode += `  // Configure PWM for ${config.varName}\n`;
                        templateCode += `  ledcSetup(0, 5000, 8); // channel, frequency, resolution\n`;
                        templateCode += `  ledcAttachPin(${config.varName}, 0);\n`;
                    } else {
                        templateCode += `  // Configure PWM for ${config.varName}\n`;
                        templateCode += `  ledcSetup(0, 5000, 8);\n`;
                        templateCode += `  ledcAttachPin(${config.varName}, 0);\n`;
                    }
                    break;
                case 'ANALOG':
                    templateCode += `  // ${config.varName} configured for analog input\n`;
                    if (currentBoard.includes('c3')) {
                        templateCode += `  analogReadResolution(12); // 12-bit ADC\n`;
                    }
                    break;
            }
        }
    });
    
    templateCode += '}\n\nvoid loop() {\n';
    templateCode += '  // Your main code here\n';
    templateCode += '  delay(1000);\n';
    templateCode += '}';
    
    document.getElementById('codeEditor').value = templateCode;
}

// Clear code editor
function clearCode() {
    document.getElementById('codeEditor').value = '';
}

// Validate Arduino code (basic syntax checking)
function validateCode() {
    const code = document.getElementById('codeEditor').value;
    const output = document.getElementById('output');
    let validationResults = [];
    let hasErrors = false;
    
    // Basic validation checks
    if (!code.trim()) {
        validationResults.push('⚠️ No code to validate');
        output.innerHTML = validationResults.join('\n');
        return;
    }
    
    // Check for setup() and loop() functions
    if (!code.includes('void setup()')) {
        validationResults.push('❌ ERROR: Missing void setup() function');
        hasErrors = true;
    }
    
    if (!code.includes('void loop()')) {
        validationResults.push('❌ ERROR: Missing void loop() function');
        hasErrors = true;
    }
    
    // Check for balanced braces
    const openBraces = (code.match(/{/g) || []).length;
    const closeBraces = (code.match(/}/g) || []).length;
    if (openBraces !== closeBraces) {
        validationResults.push(`❌ ERROR: Unbalanced braces (${openBraces} open, ${closeBraces} close)`);
        hasErrors = true;
    }
    
    // Check for balanced parentheses
    const openParens = (code.match(/\(/g) || []).length;
    const closeParens = (code.match(/\)/g) || []).length;
    if (openParens !== closeParens) {
        validationResults.push(`❌ ERROR: Unbalanced parentheses (${openParens} open, ${closeParens} close)`);
        hasErrors = true;
    }
    
    // Check for Serial.begin() in setup if Serial is used
    if (code.includes('Serial.') && !code.includes('Serial.begin')) {
        validationResults.push('⚠️ WARNING: Using Serial without Serial.begin() in setup()');
    }
    
    // Check pin configurations against used pins
    const usedPins = [];
    Object.entries(pinConfigurations).forEach(([pinNumber, config]) => {
        if (config.varName && code.includes(config.varName)) {
            usedPins.push(`✅ Pin ${pinNumber} (${config.varName}) configured and used`);
        }
    });
    
    // Check for common ESP32 functions
    const esp32Functions = ['digitalWrite', 'digitalRead', 'analogRead', 'analogWrite', 'pinMode'];
    const usedFunctions = esp32Functions.filter(func => code.includes(func));
    
    if (usedFunctions.length > 0) {
        validationResults.push(`✅ Using ESP32 functions: ${usedFunctions.join(', ')}`);
    }
    
    // Final result
    if (!hasErrors) {
        validationResults.push('\n🎉 CODE VALIDATION PASSED!');
        validationResults.push('✅ Basic syntax appears correct');
        validationResults.push('✅ Required functions present');
        validationResults.push(`✅ Board: ${boardDefinitions[currentBoard].name}`);
        
        if (usedPins.length > 0) {
            validationResults.push('\n📌 Pin Usage:');
            validationResults.push(...usedPins);
        }
        
        // Memory usage estimate
        const codeSize = code.length;
        validationResults.push(`\n📊 Estimated code size: ~${codeSize} characters`);
        output.innerHTML = `<span class="success">${validationResults.join('\n')}</span>`;
    } else {
        validationResults.push('\n❌ CODE VALIDATION FAILED');
        validationResults.push('Please fix the errors above before uploading to ESP32');
        output.innerHTML = `<span class="error">${validationResults.join('\n')}</span>`;
    }
}

// Initialize the app when page loads
window.onload = initializeApp;
