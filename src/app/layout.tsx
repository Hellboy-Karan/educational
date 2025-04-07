import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import ClientLayout from "@/ClientLayout";
import { Col, Row } from "react-bootstrap";
import Topbar from "./components/common/Topbar";

export const metadata: Metadata = {
  title: "Lalbabu Institute",
  description: "Educational hub for inspirante",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Row>
          <Col xs={12} md={2} className="bg-light">
            <ClientLayout />
          </Col>
          <Col xs={12} md={10}>
            <Topbar />
            <div className="p-3">
              {children}
            </div>
          </Col>
        </Row>
      </body>
    </html>
  );
}
