import { useState } from "react";
import { PricingHeader } from "./pricing/PricingHeader";
import { FreePlan } from "./pricing/FreePlan";
import { BasicPlan } from "./pricing/BasicPlan";
import { ProPlan } from "./pricing/ProPlan";
import { EnterprisePlan } from "./pricing/EnterprisePlan";

export const Pricing = () => {
  const [pricingPeriod, setPricingPeriod] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');
  const [basicStorage, setBasicStorage] = useState(250);
  const [proStorage, setProStorage] = useState(500);

  const calculatePrice = (basePrice: number, baseStorage: number, currentStorage: number) => {
    const extraStorage = Math.max(0, currentStorage - baseStorage);
    const extraCost = Math.floor(extraStorage / 100) * 3;
    const monthlyPrice = basePrice + extraCost;
    
    switch (pricingPeriod) {
      case 'quarterly':
        return monthlyPrice * 0.85; // 15% off
      case 'yearly':
        return monthlyPrice * 0.75; // 25% off
      default:
        return monthlyPrice;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[100%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute -bottom-[40%] -right-[20%] w-[70%] h-[100%] bg-secondary/20 blur-[120px] rounded-full animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4">
        <PricingHeader 
          pricingPeriod={pricingPeriod} 
          setPricingPeriod={setPricingPeriod} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FreePlan />
          <BasicPlan 
            pricingPeriod={pricingPeriod}
            basicStorage={basicStorage}
            setBasicStorage={setBasicStorage}
            calculatePrice={calculatePrice}
          />
          <ProPlan 
            pricingPeriod={pricingPeriod}
            proStorage={proStorage}
            setProStorage={setProStorage}
            calculatePrice={calculatePrice}
          />
          <EnterprisePlan />
        </div>
      </div>
    </section>
  );
};