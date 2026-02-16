import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import CorePrinciples from "./components/CorePrinciples";
import RealColdCalls from "./components/RealColdCalls";
import AccountBasedApproach from "./components/AccountBasedApproach";
import ExecutionFramework from "./components/ExecutionFramework";
import ReportingTransparency from "./components/ReportingTransparency";
import AISection from "./components/AISection";
import TheProcess from "./components/TheProcess";
import PricingEngagement from "./components/PricingEngagement";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <CorePrinciples />
      <RealColdCalls />
      <AccountBasedApproach />
      <ExecutionFramework />
      <ReportingTransparency />
      <AISection />
      <TheProcess />
      <PricingEngagement />
      <CTASection />
      <Footer />
    </div>
  );
}
