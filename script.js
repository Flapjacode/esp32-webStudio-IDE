// ════════════════════════════════════════════════════════════════
//  ESP32 Simulator – script.js
//  Features: board-grouped dropdown, per-board templates,
//  board-aware validator, Continue Flash, terminal tab,
//  serial shortcuts panel, keyboard shortcuts
// ════════════════════════════════════════════════════════════════

// ─── Board Definitions ───────────────────────────────────────────
const boardDefinitions = {
    'esp32-wroom': {
        name: 'ESP32 WROOM (DevKit)',
        arch: 'esp32',
        pins: {
            0:  { name: 'GPIO0',       type: 'Boot/Flash',  capabilities: ['Digital I/O', 'PWM', 'Boot Pin'] },
            1:  { name: 'GPIO1/TX0',   type: 'UART',        capabilities: ['UART TX', 'Digital I/O'] },
            2:  { name: 'GPIO2',       type: 'Boot/Flash',  capabilities: ['Digital I/O', 'PWM', 'Boot Pin', 'LED'] },
            3:  { name: 'GPIO3/RX0',   type: 'UART',        capabilities: ['UART RX', 'Digital I/O'] },
            4:  { name: 'GPIO4',       type: 'Digital',     capabilities: ['Digital I/O', 'PWM', 'Touch'] },
            5:  { name: 'GPIO5',       type: 'Digital',     capabilities: ['Digital I/O', 'PWM', 'SPI CS'] },
            12: { name: 'GPIO12',      type: 'Touch',       capabilities: ['Digital I/O', 'PWM', 'Touch', 'ADC2'] },
            13: { name: 'GPIO13',      type: 'Touch',       capabilities: ['Digital I/O', 'PWM', 'Touch', 'ADC2'] },
            14: { name: 'GPIO14',      type: 'Touch',       capabilities: ['Digital I/O', 'PWM', 'Touch', 'ADC2'] },
            15: { name: 'GPIO15',      type: 'Touch',       capabilities: ['Digital I/O', 'PWM', 'Touch', 'ADC2'] },
            16: { name: 'GPIO16/RX2',  type: 'UART',        capabilities: ['UART RX', 'Digital I/O', 'PWM'] },
            17: { name: 'GPIO17/TX2',  type: 'UART',        capabilities: ['UART TX', 'Digital I/O', 'PWM'] },
            18: { name: 'GPIO18/SCK',  type: 'SPI',         capabilities: ['SPI SCK', 'Digital I/O', 'PWM'] },
            19: { name: 'GPIO19/MISO', type: 'SPI',         capabilities: ['SPI MISO', 'Digital I/O', 'PWM'] },
            21: { name: 'GPIO21/SDA',  type: 'I2C',         capabilities: ['I2C SDA', 'Digital I/O', 'PWM'] },
            22: { name: 'GPIO22/SCL',  type: 'I2C',         capabilities: ['I2C SCL', 'Digital I/O', 'PWM'] },
            23: { name: 'GPIO23/MOSI', type: 'SPI',         capabilities: ['SPI MOSI', 'Digital I/O', 'PWM'] },
            25: { name: 'GPIO25',      type: 'Analog',      capabilities: ['Digital I/O', 'PWM', 'DAC1', 'ADC2'] },
            26: { name: 'GPIO26',      type: 'Analog',      capabilities: ['Digital I/O', 'PWM', 'DAC2', 'ADC2'] },
            27: { name: 'GPIO27',      type: 'Touch',       capabilities: ['Digital I/O', 'PWM', 'Touch', 'ADC2'] },
            32: { name: 'GPIO32',      type: 'Touch',       capabilities: ['Digital I/O', 'PWM', 'Touch', 'ADC1'] },
            33: { name: 'GPIO33',      type: 'Touch',       capabilities: ['Digital I/O', 'PWM', 'Touch', 'ADC1'] },
            34: { name: 'GPIO34',      type: 'Input Only',  capabilities: ['Analog Input', 'ADC1'] },
            35: { name: 'GPIO35',      type: 'Input Only',  capabilities: ['Analog Input', 'ADC1'] },
            36: { name: 'GPIO36/VP',   type: 'Input Only',  capabilities: ['Analog Input', 'ADC1'] },
            39: { name: 'GPIO39/VN',   type: 'Input Only',  capabilities: ['Analog Input', 'ADC1'] }
        }
    },

    'esp32-s3': {
        name: 'ESP32-S3',
        arch: 'esp32s3',
        pins: {
            0:  { name: 'GPIO0',           type: 'Boot',    capabilities: ['Digital I/O', 'PWM', 'Boot Pin'] },
            1:  { name: 'GPIO1',           type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            2:  { name: 'GPIO2',           type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            3:  { name: 'GPIO3',           type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            4:  { name: 'GPIO4',           type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            5:  { name: 'GPIO5',           type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            6:  { name: 'GPIO6',           type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            7:  { name: 'GPIO7',           type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            8:  { name: 'GPIO8',           type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            9:  { name: 'GPIO9',           type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            10: { name: 'GPIO10',          type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            11: { name: 'GPIO11',          type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC2'] },
            12: { name: 'GPIO12',          type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC2'] },
            13: { name: 'GPIO13',          type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC2'] },
            14: { name: 'GPIO14',          type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC2'] },
            15: { name: 'GPIO15',          type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC2'] },
            16: { name: 'GPIO16',          type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC2'] },
            17: { name: 'GPIO17',          type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC2'] },
            18: { name: 'GPIO18',          type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC2'] },
            19: { name: 'GPIO19',          type: 'USB',     capabilities: ['Digital I/O', 'PWM', 'USB D-'] },
            20: { name: 'GPIO20',          type: 'USB',     capabilities: ['Digital I/O', 'PWM', 'USB D+'] },
            21: { name: 'GPIO21',          type: 'Digital', capabilities: ['Digital I/O', 'PWM'] },
            35: { name: 'GPIO35/SPI MISO', type: 'SPI',     capabilities: ['Digital I/O', 'PWM', 'SPI MISO'] },
            36: { name: 'GPIO36/SPI SCK',  type: 'SPI',     capabilities: ['Digital I/O', 'PWM', 'SPI SCK'] },
            37: { name: 'GPIO37/SPI MOSI', type: 'SPI',     capabilities: ['Digital I/O', 'PWM', 'SPI MOSI'] },
            38: { name: 'GPIO38/SPI CS',   type: 'SPI',     capabilities: ['Digital I/O', 'PWM', 'SPI CS'] },
            39: { name: 'GPIO39',          type: 'Digital', capabilities: ['Digital I/O', 'PWM'] },
            40: { name: 'GPIO40',          type: 'Digital', capabilities: ['Digital I/O', 'PWM'] },
            41: { name: 'GPIO41',          type: 'Digital', capabilities: ['Digital I/O', 'PWM'] },
            42: { name: 'GPIO42',          type: 'Digital', capabilities: ['Digital I/O', 'PWM'] },
            43: { name: 'GPIO43/TX0',      type: 'UART',    capabilities: ['Digital I/O', 'UART TX'] },
            44: { name: 'GPIO44/RX0',      type: 'UART',    capabilities: ['Digital I/O', 'UART RX'] },
            45: { name: 'GPIO45',          type: 'Digital', capabilities: ['Digital I/O', 'PWM'] },
            46: { name: 'GPIO46',          type: 'Digital', capabilities: ['Digital I/O', 'PWM'] },
            47: { name: 'GPIO47',          type: 'Digital', capabilities: ['Digital I/O', 'PWM'] },
            48: { name: 'GPIO48/RGB LED',  type: 'LED',     capabilities: ['Digital I/O', 'PWM', 'RGB LED'] }
        }
    },

    'esp32-c3': {
        name: 'ESP32-C3 (DevKit)',
        arch: 'esp32c3',
        pins: {
            0:  { name: 'GPIO0',         type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            1:  { name: 'GPIO1',         type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            2:  { name: 'GPIO2',         type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            3:  { name: 'GPIO3',         type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            4:  { name: 'GPIO4',         type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            5:  { name: 'GPIO5',         type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC2'] },
            6:  { name: 'GPIO6/SPI SCK', type: 'SPI',     capabilities: ['Digital I/O', 'PWM', 'SPI SCK'] },
            7:  { name: 'GPIO7/SPI MOSI',type: 'SPI',     capabilities: ['Digital I/O', 'PWM', 'SPI MOSI'] },
            8:  { name: 'GPIO8',         type: 'Digital', capabilities: ['Digital I/O', 'PWM'] },
            9:  { name: 'GPIO9/Boot',    type: 'Boot',    capabilities: ['Digital I/O', 'PWM', 'Boot Pin'] },
            10: { name: 'GPIO10',        type: 'Digital', capabilities: ['Digital I/O', 'PWM'] },
            18: { name: 'GPIO18/USB D-', type: 'USB',     capabilities: ['Digital I/O', 'USB D-'] },
            19: { name: 'GPIO19/USB D+', type: 'USB',     capabilities: ['Digital I/O', 'USB D+'] },
            20: { name: 'GPIO20/RX',     type: 'UART',    capabilities: ['Digital I/O', 'UART RX'] },
            21: { name: 'GPIO21/TX',     type: 'UART',    capabilities: ['Digital I/O', 'UART TX'] }
        }
    },

    'esp32-c3-mini': {
        name: 'ESP32-C3 Super Mini',
        arch: 'esp32c3',
        pins: {
            0:  { name: 'GPIO0',           type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            1:  { name: 'GPIO1/TFT RST',   type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            2:  { name: 'GPIO2/TFT DC',    type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            3:  { name: 'GPIO3/BTN UP',    type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            4:  { name: 'GPIO4/BTN OK',    type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC1'] },
            5:  { name: 'GPIO5/BTN DOWN',  type: 'Digital', capabilities: ['Digital I/O', 'PWM', 'ADC2'] },
            6:  { name: 'GPIO6/SPI SCK',   type: 'SPI',     capabilities: ['Digital I/O', 'PWM', 'SPI SCK'] },
            7:  { name: 'GPIO7/SPI MOSI',  type: 'SPI',     capabilities: ['Digital I/O', 'PWM', 'SPI MOSI'] },
            8:  { name: 'GPIO8/LED',       type: 'LED',     capabilities: ['Digital I/O', 'PWM', 'Built-in LED'] },
            9:  { name: 'GPIO9/Boot',      type: 'Boot',    capabilities: ['Digital I/O', 'PWM', 'Boot Button'] },
            10: { name: 'GPIO10/TFT CS',   type: 'SPI',     capabilities: ['Digital I/O', 'PWM', 'SPI CS'] },
            20: { name: 'GPIO20',          type: 'Digital', capabilities: ['Digital I/O', 'PWM'] },
            21: { name: 'GPIO21',          type: 'Digital', capabilities: ['Digital I/O', 'PWM'] }
        }
    }
};

// ─── Board-specific validation rules ─────────────────────────────
const boardValidationRules = {
    'esp32-wroom': {
        inputOnlyPins: [34, 35, 36, 39],
        noAnalogWrite: true,
        dacPins: [25, 26],
        pwmApi: 'ledcSetup / ledcAttachPin / ledcWrite',
        notes: [
            '⚠️ GPIO34, 35, 36, 39 are INPUT ONLY — do not use as OUTPUT.',
            '⚠️ GPIO6–11 are connected to flash memory — do not use.',
            '⚠️ GPIO0, 2 are boot strapping pins — use with caution.',
            '⚠️ analogWrite() is NOT available. Use ledcWrite() for PWM.'
        ]
    },
    'esp32-s3': {
        inputOnlyPins: [],
        noAnalogWrite: true,
        pwmApi: 'ledcSetup / ledcAttachPin / ledcWrite',
        usbPins: [19, 20],
        rgbLedPin: 48,
        notes: [
            '⚠️ GPIO19, 20 are USB D- / D+ — do not repurpose if using USB.',
            '⚠️ GPIO48 is the onboard RGB LED (NeoPixel-compatible).',
            '⚠️ analogWrite() is NOT available. Use ledcWrite() for PWM.',
            '⚠️ GPIO26–32 are connected to flash/PSRAM — do not use.'
        ]
    },
    'esp32-c3': {
        inputOnlyPins: [],
        noAnalogWrite: true,
        pwmApi: 'ledcSetup / ledcAttachPin / ledcWrite',
        usbPins: [18, 19],
        bootPin: 9,
        notes: [
            '⚠️ GPIO18, 19 are USB D- / D+ — do not repurpose if using USB.',
            '⚠️ GPIO9 is the boot button — use with caution.',
            '⚠️ analogWrite() is NOT available. Use ledcWrite() for PWM.',
            '⚠️ RISC-V architecture — some ESP32 libraries may not be compatible.'
        ]
    },
    'esp32-c3-mini': {
        inputOnlyPins: [],
        noAnalogWrite: true,
        pwmApi: 'ledcSetup / ledcAttachPin / ledcWrite',
        usbPins: [],
        bootPin: 9,
        ledPin: 8,
        notes: [
            '⚠️ GPIO9 is the boot button — use with caution.',
            '⚠️ GPIO8 is the built-in LED.',
            '⚠️ analogWrite() is NOT available. Use ledcWrite() for PWM.',
            '⚠️ RISC-V architecture — some ESP32 libraries may not be compatible.'
        ]
    }
};

// ─── Project Templates (per board) ───────────────────────────────
const projectTemplates = {
    'esp32-wroom': {
        'blink': {
            name: 'Basic LED Blink',
            description: 'Blink the onboard LED on GPIO2',
            code: `// ESP32 WROOM – Basic LED Blink
const int LED_PIN = 2;  // Onboard LED

void setup() {
  Serial.begin(115200);
  pinMode(LED_PIN, OUTPUT);
  Serial.println("ESP32 WROOM – Blink Started!");
}

void loop() {
  digitalWrite(LED_PIN, HIGH);
  Serial.println("LED ON");
  delay(1000);

  digitalWrite(LED_PIN, LOW);
  Serial.println("LED OFF");
  delay(1000);
}
`
        },
        'wifi-scan': {
            name: 'WiFi Scanner',
            description: 'Scan and list available WiFi networks',
            code: `// ESP32 WROOM – WiFi Scanner
#include <WiFi.h>

void setup() {
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);
  Serial.println("WiFi Scanner Ready");
}

void loop() {
  Serial.println("Scanning...");
  int n = WiFi.scanNetworks();

  if (n == 0) {
    Serial.println("No networks found.");
  } else {
    Serial.print(n);
    Serial.println(" networks found:");
    for (int i = 0; i < n; ++i) {
      Serial.print(i + 1);
      Serial.print(": ");
      Serial.print(WiFi.SSID(i));
      Serial.print(" (");
      Serial.print(WiFi.RSSI(i));
      Serial.println(" dBm)");
      delay(10);
    }
  }
  Serial.println();
  delay(5000);
}
`
        },
        'analog-read': {
            name: 'Analog Read (ADC)',
            description: 'Read analog value from GPIO34 (input-only ADC)',
            code: `// ESP32 WROOM – Analog Read
const int ANALOG_PIN = 34;  // Input-only ADC pin

void setup() {
  Serial.begin(115200);
  analogReadResolution(12); // 12-bit: 0–4095
  Serial.println("Analog Read Started");
}

void loop() {
  int raw = analogRead(ANALOG_PIN);
  float voltage = raw * (3.3f / 4095.0f);
  Serial.print("Raw: ");
  Serial.print(raw);
  Serial.print("  Voltage: ");
  Serial.print(voltage, 2);
  Serial.println(" V");
  delay(500);
}
`
        },
        'pwm-led': {
            name: 'PWM Fade LED',
            description: 'Fade an LED using LEDC PWM on GPIO5',
            code: `// ESP32 WROOM – PWM LED Fade
const int LED_PIN  = 5;
const int PWM_CH   = 0;
const int PWM_FREQ = 5000;
const int PWM_RES  = 8; // 8-bit: 0–255

void setup() {
  Serial.begin(115200);
  ledcSetup(PWM_CH, PWM_FREQ, PWM_RES);
  ledcAttachPin(LED_PIN, PWM_CH);
  Serial.println("PWM Fade Started");
}

void loop() {
  for (int duty = 0; duty <= 255; duty += 5) {
    ledcWrite(PWM_CH, duty);
    delay(20);
  }
  for (int duty = 255; duty >= 0; duty -= 5) {
    ledcWrite(PWM_CH, duty);
    delay(20);
  }
}
`
        }
    },

    'esp32-s3': {
        'blink': {
            name: 'Basic LED Blink',
            description: 'Blink using GPIO2 (or adjust to your board LED)',
            code: `// ESP32-S3 – Basic LED Blink
const int LED_PIN = 2;

void setup() {
  Serial.begin(115200);
  pinMode(LED_PIN, OUTPUT);
  Serial.println("ESP32-S3 Blink Started!");
}

void loop() {
  digitalWrite(LED_PIN, HIGH);
  Serial.println("LED ON");
  delay(1000);
  digitalWrite(LED_PIN, LOW);
  Serial.println("LED OFF");
  delay(1000);
}
`
        },
        'rgb-led': {
            name: 'RGB NeoPixel (GPIO48)',
            description: 'Control the onboard RGB LED on GPIO48',
            code: `// ESP32-S3 – Onboard RGB NeoPixel (GPIO48)
#include <Adafruit_NeoPixel.h>

#define RGB_PIN   48
#define NUM_LEDS  1

Adafruit_NeoPixel strip(NUM_LEDS, RGB_PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  Serial.begin(115200);
  strip.begin();
  strip.setBrightness(50);
  strip.show();
  Serial.println("RGB LED Ready");
}

void loop() {
  colorCycle(1000);
}

void colorCycle(int wait) {
  strip.setPixelColor(0, strip.Color(255, 0, 0)); strip.show(); delay(wait);
  strip.setPixelColor(0, strip.Color(0, 255, 0)); strip.show(); delay(wait);
  strip.setPixelColor(0, strip.Color(0, 0, 255)); strip.show(); delay(wait);
  strip.setPixelColor(0, strip.Color(255, 255, 0)); strip.show(); delay(wait);
  strip.setPixelColor(0, 0); strip.show(); delay(wait);
}
`
        },
        'usb-serial': {
            name: 'USB Serial Echo',
            description: 'Echo serial input back via USB CDC',
            code: `// ESP32-S3 – USB Serial Echo (USB CDC)
// Ensure "USB CDC On Boot: Enabled" in Arduino board settings

void setup() {
  Serial.begin(115200);   // USB CDC serial
  Serial.setTimeout(100);
  Serial.println("ESP32-S3 USB Serial Echo Ready");
  Serial.println("Type something and press Enter...");
}

void loop() {
  if (Serial.available()) {
    String input = Serial.readStringUntil('\\n');
    input.trim();
    Serial.print("Echo > ");
    Serial.println(input);
  }
}
`
        },
        'pwm-led': {
            name: 'PWM Fade LED',
            description: 'Fade an LED using LEDC on GPIO5',
            code: `// ESP32-S3 – PWM LED Fade
const int LED_PIN  = 5;
const int PWM_CH   = 0;
const int PWM_FREQ = 5000;
const int PWM_RES  = 8;

void setup() {
  Serial.begin(115200);
  ledcSetup(PWM_CH, PWM_FREQ, PWM_RES);
  ledcAttachPin(LED_PIN, PWM_CH);
  Serial.println("S3 PWM Fade Started");
}

void loop() {
  for (int d = 0; d <= 255; d += 5) { ledcWrite(PWM_CH, d); delay(15); }
  for (int d = 255; d >= 0; d -= 5) { ledcWrite(PWM_CH, d); delay(15); }
}
`
        }
    },

    'esp32-c3': {
        'blink': {
            name: 'Basic LED Blink',
            description: 'Blink using GPIO8 (onboard LED on most C3 devkits)',
            code: `// ESP32-C3 – Basic LED Blink
const int LED_PIN = 8;

void setup() {
  Serial.begin(115200);
  pinMode(LED_PIN, OUTPUT);
  Serial.println("ESP32-C3 Blink Started!");
}

void loop() {
  digitalWrite(LED_PIN, HIGH);
  Serial.println("LED ON");
  delay(1000);
  digitalWrite(LED_PIN, LOW);
  Serial.println("LED OFF");
  delay(1000);
}
`
        },
        'button-read': {
            name: 'Button Read',
            description: 'Read GPIO9 boot button and print state',
            code: `// ESP32-C3 – Boot Button Read
const int BTN_PIN = 9;   // Boot/BOOT button
const int LED_PIN = 8;

void setup() {
  Serial.begin(115200);
  pinMode(BTN_PIN, INPUT_PULLUP);
  pinMode(LED_PIN, OUTPUT);
  Serial.println("Button Test Ready – press the BOOT button");
}

void loop() {
  bool pressed = (digitalRead(BTN_PIN) == LOW);
  digitalWrite(LED_PIN, pressed ? HIGH : LOW);
  if (pressed) {
    Serial.println("Button PRESSED");
    delay(200);
  }
}
`
        },
        'pwm-led': {
            name: 'PWM Fade LED',
            description: 'Fade LED on GPIO8 using LEDC (C3 RISC-V)',
            code: `// ESP32-C3 – PWM LED Fade (RISC-V)
const int LED_PIN  = 8;
const int PWM_CH   = 0;
const int PWM_FREQ = 5000;
const int PWM_RES  = 8;

void setup() {
  Serial.begin(115200);
  ledcSetup(PWM_CH, PWM_FREQ, PWM_RES);
  ledcAttachPin(LED_PIN, PWM_CH);
  Serial.println("C3 PWM Fade Started");
}

void loop() {
  for (int d = 0; d <= 255; d += 5) { ledcWrite(PWM_CH, d); delay(15); }
  for (int d = 255; d >= 0; d -= 5) { ledcWrite(PWM_CH, d); delay(15); }
}
`
        }
    },

    'esp32-c3-mini': {
        'tft-display': {
            name: 'TFT Display + Buttons',
            description: 'ST7735 TFT Display with 3 navigation buttons',
            code: `// ESP32-C3 Super Mini – TFT + Buttons
#include <Adafruit_GFX.h>
#include <Adafruit_ST7735.h>
#include <SPI.h>

#define TFT_CS   10
#define TFT_RST  1
#define TFT_DC   2
#define TFT_MOSI 7
#define TFT_SCK  6

#define BTN_UP   3
#define BTN_OK   4
#define BTN_DOWN 5
#define LED_PIN  8

Adafruit_ST7735 tft = Adafruit_ST7735(TFT_CS, TFT_DC, TFT_RST);
int menuSelection = 0;

void setup() {
  Serial.begin(115200);
  pinMode(BTN_UP, INPUT_PULLUP);
  pinMode(BTN_OK, INPUT_PULLUP);
  pinMode(BTN_DOWN, INPUT_PULLUP);
  pinMode(LED_PIN, OUTPUT);
  tft.initR(INITR_BLACKTAB);
  tft.setRotation(1);
  tft.fillScreen(ST77XX_BLACK);
  drawMenu();
}

void loop() {
  if (digitalRead(BTN_UP) == LOW)   { menuSelection = (menuSelection - 1 + 3) % 3; drawMenu(); delay(200); }
  if (digitalRead(BTN_DOWN) == LOW) { menuSelection = (menuSelection + 1) % 3;     drawMenu(); delay(200); }
  if (digitalRead(BTN_OK) == LOW)   { handleSelection(); delay(200); }
}

void drawMenu() {
  tft.fillScreen(ST77XX_BLACK);
  tft.setTextSize(2);
  for (int i = 0; i < 3; i++) {
    tft.setTextColor(i == menuSelection ? ST77XX_BLACK : ST77XX_WHITE,
                     i == menuSelection ? ST77XX_WHITE : ST77XX_BLACK);
    tft.setCursor(10, 20 + i * 30);
    tft.print("Option "); tft.print(i + 1);
  }
}

void handleSelection() {
  digitalWrite(LED_PIN, HIGH);
  tft.fillScreen(ST77XX_BLACK);
  tft.setTextColor(ST77XX_GREEN);
  tft.setCursor(20, 40);
  tft.print("Selected: "); tft.print(menuSelection + 1);
  delay(1000);
  digitalWrite(LED_PIN, LOW);
  drawMenu();
}
`
        },
        'basic-blink': {
            name: 'Basic LED Blink',
            description: 'Blink built-in LED on GPIO8',
            code: `// ESP32-C3 Super Mini – LED Blink
const int LED_PIN = 8;

void setup() {
  Serial.begin(115200);
  pinMode(LED_PIN, OUTPUT);
  Serial.println("ESP32-C3 Super Mini – Blink Started!");
}

void loop() {
  digitalWrite(LED_PIN, HIGH); Serial.println("LED ON");  delay(1000);
  digitalWrite(LED_PIN, LOW);  Serial.println("LED OFF"); delay(1000);
}
`
        },
        'button-control': {
            name: 'Button Control',
            description: 'Control LED brightness with 3 buttons',
            code: `// ESP32-C3 Super Mini – Button Control
const int LED_PIN  = 8;
const int BTN_UP   = 3;
const int BTN_OK   = 4;
const int BTN_DOWN = 5;
int brightness = 128;
bool ledOn = true;

void setup() {
  Serial.begin(115200);
  pinMode(LED_PIN, OUTPUT);
  pinMode(BTN_UP,   INPUT_PULLUP);
  pinMode(BTN_OK,   INPUT_PULLUP);
  pinMode(BTN_DOWN, INPUT_PULLUP);
  ledcSetup(0, 5000, 8);
  ledcAttachPin(LED_PIN, 0);
  Serial.println("Button Control Ready");
}

void loop() {
  if (digitalRead(BTN_UP) == LOW)   { brightness = min(255, brightness + 10); ledcWrite(0, brightness); Serial.print("Brightness: "); Serial.println(brightness); delay(100); }
  if (digitalRead(BTN_DOWN) == LOW) { brightness = max(0, brightness - 10);   ledcWrite(0, brightness); Serial.print("Brightness: "); Serial.println(brightness); delay(100); }
  if (digitalRead(BTN_OK) == LOW)   { brightness = (brightness > 0) ? 0 : 128; ledcWrite(0, brightness); Serial.println(brightness > 0 ? "LED ON" : "LED OFF"); delay(300); }
}
`
        }
    }
};

// ─── State ───────────────────────────────────────────────────────
let currentBoard = 'esp32-wroom';
let selectedPin = null;
let pinConfigurations = {};
let port = null;
let writer = null;
let reader = null;
let isConnected = false;
let activeTab = 'output';
let terminalHistory = [];
let historyIndex = -1;

// ─── Init ─────────────────────────────────────────────────────────
function initializeApp() {
    createBoardSelector();
    createPinDiagram();
    registerKeyboardShortcuts();
}

// ─── Board Selector ───────────────────────────────────────────────
function createBoardSelector() {
    const header = document.querySelector('.header');
    const selectorDiv = document.createElement('div');
    selectorDiv.className = 'board-selector';
    selectorDiv.innerHTML = `
        <label for="boardSelect">Board:</label>
        <select id="boardSelect" onchange="changeBoard(this.value)">
            <optgroup label="ESP32 WROOM">
                <option value="esp32-wroom">ESP32 WROOM (DevKit)</option>
            </optgroup>
            <optgroup label="ESP32-S3">
                <option value="esp32-s3">ESP32-S3</option>
            </optgroup>
            <optgroup label="ESP32-C3">
                <option value="esp32-c3">ESP32-C3 (DevKit)</option>
                <option value="esp32-c3-mini">ESP32-C3 Super Mini</option>
            </optgroup>
        </select>
        <div class="template-selector-row" id="templateSelectorRow">
            <label for="templateSelect">Template:</label>
            <select id="templateSelect" onchange="loadTemplate(this.value)">
                <option value="">-- Project Template --</option>
            </select>
        </div>
    `;
    header.appendChild(selectorDiv);
    populateTemplates('esp32-wroom');
}

function populateTemplates(boardKey) {
    const sel = document.getElementById('templateSelect');
    if (!sel) return;
    sel.innerHTML = '<option value="">-- Project Template --</option>';
    const templates = projectTemplates[boardKey] || {};
    Object.entries(templates).forEach(([key, tpl]) => {
        const opt = document.createElement('option');
        opt.value = key;
        opt.textContent = tpl.name;
        sel.appendChild(opt);
    });
}

function changeBoard(boardType) {
    currentBoard = boardType;
    pinConfigurations = {};
    selectedPin = null;
    createPinDiagram();
    document.getElementById('pinConfig').innerHTML = '<p>Select a pin to configure</p>';
    populateTemplates(boardType);
    document.getElementById('templateSelect').value = '';
}

function loadTemplate(templateKey) {
    if (!templateKey) return;
    const tpl = (projectTemplates[currentBoard] || {})[templateKey];
    if (!tpl) return;
    document.getElementById('codeEditor').value = tpl.code;
    appendOutput(`<span class="success">✅ Loaded template: ${tpl.name}\n${tpl.description}</span>`);
}

// ─── Pin Diagram ─────────────────────────────────────────────────
function createPinDiagram() {
    const diagram = document.getElementById('pinDiagram');
    diagram.innerHTML = '';

    const board = boardDefinitions[currentBoard];
    const boardTitle = document.createElement('h3');
    boardTitle.textContent = board.name;
    diagram.appendChild(boardTitle);

    Object.entries(board.pins).forEach(([pinNumber, pinData]) => {
        const pinButton = document.createElement('div');
        pinButton.className = 'pin-button';
        pinButton.dataset.pin = pinNumber;
        pinButton.onclick = (e) => selectPin(pinNumber, e);
        pinButton.innerHTML = `
            <div class="pin-name">${pinData.name}</div>
            <div class="pin-type">${pinData.type}</div>
        `;
        diagram.appendChild(pinButton);
    });
}

function selectPin(pinNumber, event) {
    document.querySelectorAll('.pin-button').forEach(btn => btn.classList.remove('selected'));
    const target = event.target.closest('.pin-button');
    if (target) target.classList.add('selected');
    selectedPin = pinNumber;
    showPinConfiguration(pinNumber);
}

function showPinConfiguration(pinNumber) {
    const board = boardDefinitions[currentBoard];
    const pinData = board.pins[pinNumber];
    const configPanel = document.getElementById('pinConfig');
    const rules = boardValidationRules[currentBoard];
    const isInputOnly = rules && rules.inputOnlyPins.includes(parseInt(pinNumber));

    let configHTML = `
        <div class="config-section">
            <h4>Pin ${pinData.name} Configuration</h4>
            ${isInputOnly ? '<p style="color:#e53e3e;font-size:0.85em;margin-bottom:8px;">⚠️ This pin is INPUT ONLY</p>' : ''}
            <div class="input-group">
                <label>Pin Mode:</label>
                <select id="pinMode_${pinNumber}" onchange="updatePinConfig(${pinNumber})">
                    <option value="">Select Mode...</option>
    `;

    const added = new Set();
    pinData.capabilities.forEach(capability => {
        const opts = capabilityToOptions(capability, isInputOnly);
        opts.forEach(o => {
            if (!added.has(o.value)) {
                added.add(o.value);
                configHTML += `<option value="${o.value}">${o.label}</option>`;
            }
        });
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

    // Restore saved values
    if (pinConfigurations[pinNumber]) {
        const cfg = pinConfigurations[pinNumber];
        const modeEl = document.getElementById(`pinMode_${pinNumber}`);
        const varEl  = document.getElementById(`varName_${pinNumber}`);
        const descEl = document.getElementById(`description_${pinNumber}`);
        if (modeEl) modeEl.value = cfg.mode;
        if (varEl)  varEl.value  = cfg.varName;
        if (descEl) descEl.value = cfg.description;
    }
}

function capabilityToOptions(capability, isInputOnly) {
    const opts = [];
    switch (capability) {
        case 'Digital I/O':
            opts.push({ value: 'INPUT',        label: 'Digital Input' });
            opts.push({ value: 'INPUT_PULLUP',  label: 'Input with Pullup' });
            if (!isInputOnly) opts.push({ value: 'OUTPUT', label: 'Digital Output' });
            break;
        case 'PWM':
            if (!isInputOnly) opts.push({ value: 'PWM', label: 'PWM Output' });
            break;
        case 'ADC1': case 'ADC2': case 'Analog Input':
            opts.push({ value: 'ANALOG', label: 'Analog Input' });
            break;
        case 'DAC1': opts.push({ value: 'DAC1', label: 'DAC Output (Ch1)' }); break;
        case 'DAC2': opts.push({ value: 'DAC2', label: 'DAC Output (Ch2)' }); break;
        case 'SPI SCK':  opts.push({ value: 'SPI_SCK',  label: 'SPI Clock' }); break;
        case 'SPI MISO': opts.push({ value: 'SPI_MISO', label: 'SPI MISO' }); break;
        case 'SPI MOSI': opts.push({ value: 'SPI_MOSI', label: 'SPI MOSI' }); break;
        case 'SPI CS':   opts.push({ value: 'SPI_CS',   label: 'SPI Chip Select' }); break;
        case 'I2C SDA':  opts.push({ value: 'I2C_SDA',  label: 'I2C Data (SDA)' }); break;
        case 'I2C SCL':  opts.push({ value: 'I2C_SCL',  label: 'I2C Clock (SCL)' }); break;
        case 'UART TX':  opts.push({ value: 'UART_TX',  label: 'UART Transmit' }); break;
        case 'UART RX':  opts.push({ value: 'UART_RX',  label: 'UART Receive' }); break;
        case 'Built-in LED': opts.push({ value: 'LED', label: 'Built-in LED' }); break;
        case 'RGB LED':  opts.push({ value: 'RGB_LED', label: 'RGB NeoPixel' }); break;
        case 'Boot Pin': case 'Boot Button':
            opts.push({ value: 'BOOT', label: 'Boot Button (read only)' }); break;
        case 'Touch':    opts.push({ value: 'TOUCH', label: 'Capacitive Touch' }); break;
        case 'USB D-':   opts.push({ value: 'USB_DM', label: 'USB D-' }); break;
        case 'USB D+':   opts.push({ value: 'USB_DP', label: 'USB D+' }); break;
    }
    return opts;
}

function updatePinConfig(pinNumber) {
    const board = boardDefinitions[currentBoard];
    pinConfigurations[pinNumber] = {
        pin: board.pins[pinNumber],
        mode: document.getElementById(`pinMode_${pinNumber}`)?.value || '',
        varName: document.getElementById(`varName_${pinNumber}`)?.value || '',
        description: document.getElementById(`description_${pinNumber}`)?.value || ''
    };
}

// ─── Template Generator ───────────────────────────────────────────
function generateTemplate() {
    const board = boardDefinitions[currentBoard];
    const arch  = board.arch;
    let code = `// Auto-generated ${board.name} code template\n// Board: ${board.name}\n\n`;

    Object.entries(pinConfigurations).forEach(([pinNumber, config]) => {
        if (config.varName && config.mode) {
            code += `const int ${config.varName} = ${pinNumber}; // ${config.description || config.pin.name}\n`;
        }
    });

    code += '\nvoid setup() {\n  Serial.begin(115200);\n\n';

    Object.entries(pinConfigurations).forEach(([pinNumber, config]) => {
        if (!config.varName || !config.mode) return;
        switch (config.mode) {
            case 'INPUT': case 'OUTPUT': case 'INPUT_PULLUP':
                code += `  pinMode(${config.varName}, ${config.mode});\n`;
                break;
            case 'PWM':
                code += `  // PWM for ${config.varName}\n`;
                code += `  ledcSetup(0, 5000, 8);\n`;
                code += `  ledcAttachPin(${config.varName}, 0);\n`;
                break;
            case 'ANALOG':
                code += `  // ${config.varName} is analog input\n`;
                code += `  analogReadResolution(12);\n`;
                break;
            case 'DAC1': case 'DAC2':
                code += `  // ${config.varName} is DAC output\n`;
                break;
        }
    });

    code += '}\n\nvoid loop() {\n  // Your main code here\n  delay(1000);\n}';
    document.getElementById('codeEditor').value = code;
}

// ─── Save / Clear ─────────────────────────────────────────────────
function saveCodeToFile() {
    const code = document.getElementById('codeEditor').value;
    const board = boardDefinitions[currentBoard];
    const filename = `esp32_sketch_${board.name.replace(/\s+/g, '_').toLowerCase()}.ino`;
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    appendOutput(`<span class="success">✅ Saved: ${filename}</span>`);
}

function clearCode() {
    document.getElementById('codeEditor').value = '';
}

function clearOutput() {
    if (activeTab === 'output') {
        document.getElementById('output').textContent = '';
    } else {
        document.getElementById('terminalOutput').textContent = '';
    }
}

// ─── Output helpers ───────────────────────────────────────────────
function appendOutput(html) {
    const el = document.getElementById('output');
    el.innerHTML += (el.innerHTML ? '\n' : '') + html;
    el.scrollTop = el.scrollHeight;
}

function appendTerminal(text, cls = '') {
    const el = document.getElementById('terminalOutput');
    const line = document.createElement('div');
    if (cls) line.className = cls;
    line.textContent = text;
    el.appendChild(line);
    el.scrollTop = el.scrollHeight;
}

// ─── Tab Toggle ───────────────────────────────────────────────────
function switchTab(tab) {
    activeTab = tab;
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab' + tab.charAt(0).toUpperCase() + tab.slice(1)).classList.add('active');
    document.getElementById('btn' + tab.charAt(0).toUpperCase() + tab.slice(1)).classList.add('active');

    const titles = { output: '📋 Output', terminal: '⬛ Terminal' };
    document.getElementById('outputPanelTitle').textContent = titles[tab] || tab;

    if (tab === 'terminal') {
        document.getElementById('terminalInput').focus();
    }
}

// ─── Flash / Connect ─────────────────────────────────────────────
async function flashToESP32() {
    if (!('serial' in navigator)) {
        appendOutput(`<span class="error">❌ Web Serial API not supported.\nPlease use Chrome, Edge, or Opera.</span>`);
        return;
    }

    try {
        port = await navigator.serial.requestPort();
        await port.open({ baudRate: 115200 });
        isConnected = true;

        document.getElementById('continueFlashBtn').disabled = false;
        appendOutput(`<span class="success">✅ Connected to ESP32!\n📡 Serial port opened at 115200 baud\n\nSwitch to Terminal tab to interact with the device.\nPress "Continue Flash" to send your editor code.</span>`);
        appendTerminal('✅ Serial port connected at 115200 baud', 'success');
        appendTerminal('Type commands below or press "Continue Flash" to upload code.', 'info');

        // Switch to terminal tab automatically
        switchTab('terminal');

        // Set up streams
        const textDecoder = new TextDecoderStream();
        port.readable.pipeTo(textDecoder.writable);
        reader = textDecoder.readable.getReader();

        const textEncoder = new TextEncoderStream();
        textEncoder.readable.pipeTo(port.writable);
        writer = textEncoder.writable.getWriter();

        readSerialData();

    } catch (error) {
        appendOutput(`<span class="error">❌ Error connecting:\n${error.message}</span>`);
    }
}

// Continue Flash: send the editor code to the serial port
async function continueFlash() {
    if (!isConnected || !writer) {
        appendOutput(`<span class="error">❌ Not connected. Click "Flash / Connect" first.</span>`);
        return;
    }

    const code = document.getElementById('codeEditor').value.trim();
    if (!code) {
        appendOutput(`<span class="warning">⚠️ Code editor is empty.</span>`);
        return;
    }

    try {
        await writer.write(code + '\n');
        appendTerminal('>>> Code sent to device via serial.', 'success');
        appendOutput(`<span class="success">✅ Code transmitted to ESP32 via serial.\n(Note: Full OTA flash requires esptool.py or Arduino IDE.)</span>`);
    } catch (err) {
        appendTerminal(`Error sending code: ${err.message}`, 'error');
    }
}

// Disconnect serial
async function disconnectSerial() {
    isConnected = false;
    document.getElementById('continueFlashBtn').disabled = true;
    try { if (reader) { await reader.cancel(); reader = null; } } catch (_) {}
    try { if (writer) { await writer.close(); writer = null; } } catch (_) {}
    try { if (port)   { await port.close(); port = null; } } catch (_) {}
    appendTerminal('🔌 Disconnected from serial port.', 'warning');
    appendOutput(`<span class="warning">🔌 Serial port disconnected.</span>`);
}

// Read incoming serial data
async function readSerialData() {
    try {
        while (true) {
            const { value, done } = await reader.read();
            if (done) { reader.releaseLock(); break; }
            if (value) {
                appendTerminal(value.trimEnd());
                // Also mirror to output tab
                const el = document.getElementById('output');
                el.innerHTML += `\n<span class="info">${escapeHtml(value.trimEnd())}</span>`;
                el.scrollTop = el.scrollHeight;
            }
        }
    } catch (err) {
        appendTerminal(`Serial read error: ${err.message}`, 'error');
    }
}

function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ─── Terminal Input ───────────────────────────────────────────────
function handleTerminalInput(event) {
    const input = document.getElementById('terminalInput');
    if (event.key === 'Enter') {
        sendTerminalCommand();
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (historyIndex < terminalHistory.length - 1) {
            historyIndex++;
            input.value = terminalHistory[terminalHistory.length - 1 - historyIndex];
        }
    } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (historyIndex > 0) {
            historyIndex--;
            input.value = terminalHistory[terminalHistory.length - 1 - historyIndex];
        } else {
            historyIndex = -1;
            input.value = '';
        }
    } else if (event.ctrlKey && event.key === 'l') {
        event.preventDefault();
        document.getElementById('terminalOutput').textContent = '';
    } else if (event.ctrlKey && event.key === 'c') {
        // Send interrupt byte
        if (writer) writer.write('\x03');
        appendTerminal('^C', 'warning');
    }
}

async function sendTerminalCommand() {
    const input = document.getElementById('terminalInput');
    const cmd = input.value.trim();
    if (!cmd) return;

    terminalHistory.push(cmd);
    historyIndex = -1;
    input.value = '';

    appendTerminal(`> ${cmd}`, 'info');

    if (!isConnected || !writer) {
        appendTerminal('⚠️ Not connected. Click "Flash / Connect" first.', 'warning');
        return;
    }

    try {
        await writer.write(cmd + '\r\n');
    } catch (err) {
        appendTerminal(`Send error: ${err.message}`, 'error');
    }
}

function pasteCommand(cmd) {
    const input = document.getElementById('terminalInput');
    if (input) {
        input.value = cmd;
        input.focus();
        closeShortcutsPanel();
        switchTab('terminal');
    }
}

// ─── Shortcuts Modal ─────────────────────────────────────────────
function openShortcutsPanel() {
    document.getElementById('shortcutsModal').classList.add('open');
}

function closeShortcutsPanel() {
    document.getElementById('shortcutsModal').classList.remove('open');
}

function closeShortcutsModal(event) {
    if (event.target === document.getElementById('shortcutsModal')) {
        closeShortcutsPanel();
    }
}

// ─── Keyboard Shortcuts ───────────────────────────────────────────
function registerKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl+Shift+C → Connect
        if (e.ctrlKey && e.shiftKey && e.key === 'C') { e.preventDefault(); flashToESP32(); }
        // Ctrl+Shift+D → Disconnect
        if (e.ctrlKey && e.shiftKey && e.key === 'D') { e.preventDefault(); disconnectSerial(); }
        // Ctrl+Shift+F → Continue Flash
        if (e.ctrlKey && e.shiftKey && e.key === 'F') { e.preventDefault(); continueFlash(); }
        // Escape → close modal
        if (e.key === 'Escape') closeShortcutsPanel();
    });
}

// ─── Upload Modal State ────────────────────────────────────────────
let uploadModalOpen = false;

// ─── Upload Modal Functions ───────────────────────────────────────
function openUploadDialog() {
    const modal = document.getElementById('uploadModal');
    if (modal) {
        modal.classList.add('open');
        uploadModalOpen = true;
        console.log('📤 Upload modal opened');
    } else {
        console.error('❌ Upload modal element not found');
    }
}

function closeUploadModal(event) {
    // Close modal only if:
    // 1. No event (called from close button or programmatically)
    // 2. Event target is the modal overlay itself (clicking outside the box)
    if (!event || event.target.id === 'uploadModal') {
        const modal = document.getElementById('uploadModal');
        if (modal) {
            modal.classList.remove('open');
            uploadModalOpen = false;
            // Reset form
            document.getElementById('uploadFileInput').value = '';
            document.getElementById('urlInput').value = '';
            console.log('📤 Upload modal closed');
        }
    }
}

function switchUploadTab(tab) {
    console.log(`📑 Switching upload tab to: ${tab}`);
    // Hide all tabs
    document.querySelectorAll('.upload-tab-content').forEach(el => {
        el.classList.remove('active');
    });
    document.querySelectorAll('.upload-tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById('uploadFileTab').classList.toggle('active', tab === 'file');
    document.getElementById('uploadUrlTab').classList.toggle('active', tab === 'url');
    document.querySelectorAll('.upload-tab-btn')[tab === 'file' ? 0 : 1].classList.add('active');
}

async function loadFromFile() {
    console.log('📁 Loading from file...');
    const fileInput = document.getElementById('uploadFileInput');
    const file = fileInput.files[0];
    
    if (!file) {
        appendOutput('<span class="warning">⚠️ Please select a file first.</span>');
        console.warn('❌ No file selected');
        return;
    }
    
    try {
        const isBinary = file.name.endsWith('.bin');
        
        if (isBinary) {
            // Handle binary .bin file
            const arrayBuffer = await file.arrayBuffer();
            const uint8Array = new Uint8Array(arrayBuffer);
            
            // Convert to hex string for display
            const hexString = Array.from(uint8Array)
                .map(b => b.toString(16).padStart(2, '0'))
                .join(' ');
            
            // Store binary data globally for potential flashing
            window.binaryFileData = {
                name: file.name,
                size: file.size,
                data: uint8Array,
                hex: hexString.substring(0, 500) + (hexString.length > 500 ? '...' : '')
            };
            
            appendOutput(`<span class="success">✅ Binary file loaded: ${file.name}\n📊 Size: ${(file.size / 1024).toFixed(2)} KB\n🔧 Ready for flashing\n\n📝 Hex preview (first 500 chars):\n<code>${window.binaryFileData.hex}</code>\n\n<button class="btn btn-success" onclick="flashBinaryFile()" style="margin-top: 12px; width: 100%;">⚡ Flash Binary to ESP32</button></span>`);
            console.log(`✅ Binary file loaded: ${file.name}`, window.binaryFileData);
        } else {
            // Handle text files
            const text = await file.text();
            document.getElementById('codeEditor').value = text;
            appendOutput(`<span class="success">✅ Code file loaded: ${file.name}\n📊 Size: ${(file.size / 1024).toFixed(2)} KB</span>`);
            console.log(`✅ Text file loaded successfully: ${file.name}`);
        }
        
        closeUploadModal();
        switchTab('output');
    } catch (error) {
        appendOutput(`<span class="error">❌ Error reading file:\n${error.message}</span>`);
        console.error('❌ Error reading file:', error);
    }
}

async function loadFromURL() {
    console.log('🔗 Loading from URL...');
    const url = document.getElementById('urlInput').value.trim();
    
    if (!url) {
        appendOutput('<span class="warning">⚠️ Please enter a URL.</span>');
        console.warn('❌ No URL provided');
        return;
    }
    
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        appendOutput('<span class="error">❌ URL must start with http:// or https://</span>');
        console.warn('❌ Invalid URL format:', url);
        return;
    }
    
    try {
        appendOutput('<span class="info">⏳ Fetching code from URL...</span>');
        console.log('📡 Fetching from:', url);
        
        const response = await fetch(url, {
            mode: 'cors',
            cache: 'no-cache'
        });
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const contentType = response.headers.get('content-type');
        if (!contentType || (!contentType.includes('text') && !contentType.includes('plain'))) {
            console.warn('Unexpected content type:', contentType);
        }
        
        const text = await response.text();
        
        if (!text || text.trim().length === 0) {
            throw new Error('URL returned empty content');
        }
        
        document.getElementById('codeEditor').value = text;
        appendOutput(`<span class="success">✅ Loaded code from URL:\n${url}\nSize: ${(text.length / 1024).toFixed(2)} KB</span>`);
        console.log('✅ Successfully loaded from URL');
        closeUploadModal();
        switchTab('output');
        
    } catch (error) {
        console.error('❌ Error loading from URL:', error);
        appendOutput(`<span class="error">❌ Error loading from URL:\n${error.message}\n\n💡 Tip: The server must allow CORS requests. Some URLs may not work.</span>`);
    }
}

// Keyboard shortcut for upload modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && uploadModalOpen) closeUploadModal();
});

// ─── Flash Binary File ────────────────────────────────────────────
async function flashBinaryFile() {
    console.log('⚡ Attempting to flash binary file...');
    
    if (!window.binaryFileData) {
        appendOutput('<span class="error">❌ No binary file loaded. Load a .bin file first.</span>');
        console.warn('❌ No binary file data');
        return;
    }
    
    if (!isConnected || !writer) {
        appendOutput('<span class="error">❌ Not connected to ESP32. Click "Flash / Connect" first.</span>');
        console.warn('❌ Not connected');
        return;
    }
    
    try {
        appendOutput('<span class="info">⏳ Flashing binary file to ESP32...</span>');
        appendTerminal(`📡 Starting binary flash: ${window.binaryFileData.name} (${window.binaryFileData.size} bytes)`, 'info');
        
        const chunk = window.binaryFileData.data;
        
        // Send binary data in chunks
        const chunkSize = 256;
        let sent = 0;
        
        for (let i = 0; i < chunk.length; i += chunkSize) {
            const slice = chunk.slice(i, i + chunkSize);
            await writer.write(slice);
            sent += slice.length;
            
            // Update progress
            const percent = Math.round((sent / chunk.length) * 100);
            console.log(`📊 Flash progress: ${percent}%`);
            appendTerminal(`📊 Progress: ${percent}% (${sent}/${chunk.length} bytes)`, 'info');
        }
        
        appendOutput('<span class="success">✅ Binary file transmitted successfully!\\n🎉 Flash complete: ' + window.binaryFileData.name + '</span>');
        appendTerminal('✅ Binary flash completed successfully!', 'success');
        console.log('✅ Binary file flashed successfully');
        
    } catch (error) {
        console.error('❌ Error flashing binary:', error);
        appendOutput(`<span class="error">❌ Error flashing binary file:\\n${error.message}</span>`);
        appendTerminal(`❌ Flash error: ${error.message}`, 'error');
    }
}

// ─── Validator ────────────────────────────────────────────────────
function validateCode() {
    const code = document.getElementById('codeEditor').value;
    const board = boardDefinitions[currentBoard];
    const rules = boardValidationRules[currentBoard];
    let results = [];
    let hasErrors = false;

    if (!code.trim()) {
        appendOutput('<span class="warning">⚠️ No code to validate.</span>');
        return;
    }

    results.push(`🔍 Validating for board: ${board.name}\n`);

    // ── Required structure
    if (!code.includes('void setup()')) {
        results.push('❌ ERROR: Missing void setup() function');
        hasErrors = true;
    } else {
        results.push('✅ void setup() found');
    }

    if (!code.includes('void loop()')) {
        results.push('❌ ERROR: Missing void loop() function');
        hasErrors = true;
    } else {
        results.push('✅ void loop() found');
    }

    // ── Braces / Parens
    const openBraces  = (code.match(/{/g) || []).length;
    const closeBraces = (code.match(/}/g) || []).length;
    if (openBraces !== closeBraces) {
        results.push(`❌ ERROR: Unbalanced braces (${openBraces} open, ${closeBraces} close)`);
        hasErrors = true;
    } else {
        results.push(`✅ Braces balanced (${openBraces} pairs)`);
    }

    const openParens  = (code.match(/\(/g) || []).length;
    const closeParens = (code.match(/\)/g) || []).length;
    if (openParens !== closeParens) {
        results.push(`❌ ERROR: Unbalanced parentheses (${openParens} open, ${closeParens} close)`);
        hasErrors = true;
    } else {
        results.push(`✅ Parentheses balanced`);
    }

    // ── Serial.begin check
    if (code.includes('Serial.') && !code.includes('Serial.begin')) {
        results.push('⚠️ WARNING: Serial used but Serial.begin() not found in setup()');
    }

    // ── Board-specific: analogWrite not available on ESP32
    if (rules && rules.noAnalogWrite && code.includes('analogWrite(')) {
        results.push(`⚠️ WARNING: analogWrite() is NOT available on ${board.name}.\n   Use ledcWrite() instead. (${rules.pwmApi})`);
    }

    // ── Board-specific: input-only pins used as OUTPUT
    if (rules && rules.inputOnlyPins.length > 0) {
        rules.inputOnlyPins.forEach(p => {
            const pinRegex = new RegExp(`pinMode\\s*\\(\\s*${p}\\s*,\\s*OUTPUT\\s*\\)`, 'g');
            if (pinRegex.test(code)) {
                results.push(`❌ ERROR: GPIO${p} is INPUT ONLY on ${board.name} — cannot use as OUTPUT.`);
                hasErrors = true;
            }
        });
    }

    // ── Board notes
    if (rules && rules.notes.length > 0) {
        results.push('\n📌 Board-specific notes:');
        rules.notes.forEach(n => results.push('  ' + n));
    }

    // ── Arduino functions used
    const arduinoFns = ['digitalWrite', 'digitalRead', 'analogRead', 'analogWrite', 'pinMode', 'delay', 'millis', 'ledcWrite', 'ledcSetup', 'ledcAttachPin'];
    const usedFns = arduinoFns.filter(fn => code.includes(fn));
    if (usedFns.length > 0) {
        results.push(`\n✅ Functions detected: ${usedFns.join(', ')}`);
    }

    // ── Configured pins used
    const usedPins = [];
    Object.entries(pinConfigurations).forEach(([pinNumber, config]) => {
        if (config.varName && code.includes(config.varName)) {
            usedPins.push(`  ✅ GPIO${pinNumber} (${config.varName}) — configured & used`);
        }
    });
    if (usedPins.length > 0) {
        results.push('\n📌 Configured Pin Usage:');
        results.push(...usedPins);
    }

    // ── .ino style checks
    results.push('\n📄 .ino style checks:');
    if (!code.includes('#include') && (code.includes('WiFi') || code.includes('Wire') || code.includes('SPI'))) {
        results.push('  ⚠️ Library functions detected but no #include found — add required headers.');
    } else {
        results.push('  ✅ Include structure looks OK');
    }

    // ── Size estimate
    results.push(`\n📊 Code size estimate: ~${code.length} chars / ~${Math.ceil(code.length / 1024)} KB`);

    if (!hasErrors) {
        results.push('\n🎉 VALIDATION PASSED — code structure is valid for ' + board.name);
        document.getElementById('output').innerHTML = `<span class="success">${results.join('\n')}</span>`;
    } else {
        results.push('\n❌ VALIDATION FAILED — fix the errors above before uploading.');
        document.getElementById('output').innerHTML = `<span class="error">${results.join('\n')}</span>`;
    }

    // Switch to output tab to show results
    switchTab('output');
}

// ─── Boot ─────────────────────────────────────────────────────────
window.onload = initializeApp;
