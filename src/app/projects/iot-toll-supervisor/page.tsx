import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, FileText } from "lucide-react";
import Image from "next/image";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project: IoT Tollbooth System Supervisor',
  description: 'Details about the IoT Tollbooth System Supervisor project.',
};

const techStack = ["ESP32", "Arduino Uno", "RFID (MFRC522)", "Servo Motor", "Embedded C++", "Google Sheets API"];
const features = [
  "Automated Vehicle Detection via RFID.",
  "Automated Gate Control using a servo motor.",
  "Real-time Data Logging of all transactions to Google Sheets.",
  "Security Checks to ensure only authorized RFID tags are allowed.",
  "Customizable Buzzer Alerts for valid and invalid entries."
];
const components = ["ESP32", "Arduino Uno", "RFID Module (MFRC522)", "Servo Motor", "Buzzer", "LCD with I2C", "Wires and Breadboard"];

export default function IotProjectPage() {
  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-10 duration-700">
      <header className="space-y-4">
        <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl">IoT Tollbooth System Supervisor</h1>
        <p className="text-xl text-muted-foreground">This project harnesses the power of the Internet of Things (IoT) and RFID technology to revolutionize tollbooth operations, optimizing traffic flow and offering a more efficient and user-friendly experience for drivers.</p>
        <div className="flex flex-wrap gap-2">
            {techStack.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}
        </div>
        <div className="flex gap-2 pt-4">
            <Button asChild>
                <a href="https://github.com/AadityaPanda/ITSS" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2"/> View on GitHub
                </a>
            </Button>
            <Button variant="outline" asChild>
                <a href="https://ieeexplore.ieee.org/document/10993585" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2"/> Read Research Paper
                </a>
            </Button>
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
            <CardHeader><CardTitle>Key Features</CardTitle></CardHeader>
            <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {features.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </CardContent>
        </Card>
        <Card>
            <CardHeader><CardTitle>Components Required</CardTitle></CardHeader>
            <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {components.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </CardContent>
        </Card>
      </div>

       <Card>
        <CardHeader><CardTitle>How It Works</CardTitle></CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
            <p>The system is designed to simplify toll management by automating vehicle recognition and payment deduction. With RFID technology, the system identifies registered vehicles, opens the toll gate, deducts the toll amount, and logs transaction data in Google Sheets via ESP32.</p>
            <ol className="list-decimal pl-5 space-y-2">
                <li><span className="font-semibold text-foreground">Card Detection:</span> When a vehicle’s RFID card is scanned, the system checks if it matches any registered card.</li>
                <li><span className="font-semibold text-foreground">Authentication:</span> If the card matches, the system displays the vehicle ID on the LCD, opens the gate, and sends data to the ESP32.</li>
                <li><span className="font-semibold text-foreground">Data Logging:</span> The ESP32 logs the transaction in Google Sheets, including date, time, and vehicle UID.</li>
            </ol>
        </CardContent>
      </Card>

      <div className="space-y-8">
        <h2 className="text-3xl font-headline font-bold tracking-tight">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Image src="https://placehold.co/600x400.png" alt="Project Setup" width={600} height={400} className="rounded-lg object-cover" data-ai-hint="circuit board project" />
            <Image src="https://placehold.co/600x400.png" alt="Hardware Setup" width={600} height={400} className="rounded-lg object-cover" data-ai-hint="electronic components" />
            <Image src="https://placehold.co/600x400.png" alt="Circuit Diagram" width={600} height={400} className="rounded-lg object-cover" data-ai-hint="circuit diagram" />
            <Image src="https://placehold.co/600x400.png" alt="Mobile App" width={600} height={400} className="rounded-lg object-cover" data-ai-hint="mobile app interface" />
        </div>
      </div>
    </div>
  )
}