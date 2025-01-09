import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Check } from "lucide-react";

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [basicStorage, setBasicStorage] = useState(250);
  const [proStorage, setProStorage] = useState(500);

  const calculatePrice = (basePrice: number, baseStorage: number, currentStorage: number) => {
    const extraStorage = Math.max(0, currentStorage - baseStorage);
    const extraCost = Math.floor(extraStorage / 100) * 3;
    const totalPrice = basePrice + extraCost;
    return isYearly ? totalPrice * 0.75 : totalPrice;
  };

  const basicPrice = calculatePrice(19, 250, basicStorage);
  const proPrice = calculatePrice(39, 500, proStorage);

  const PlanFeature = ({ text }: { text: string }) => (
    <div className="flex items-center gap-2 text-sm text-white/70">
      <Check className="w-4 h-4 text-primary" />
      <span>{text}</span>
    </div>
  );

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[100%] bg-primary/20 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Find the Perfect Plan for You
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Start for free and scale up as you grow. Choose the plan that fits your workflow.
          </p>
          
          <div className="flex items-center justify-center gap-3">
            <span className="text-sm text-white/70">Monthly</span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
            />
            <span className="text-sm text-white/70">
              Yearly <span className="text-primary">(25% off)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Free Plan */}
          <Card className="glass p-6 flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Free</h3>
            <p className="text-white/70 mb-6">For Beginners or Small Projects</p>
            <div className="text-3xl font-bold mb-8">
              $0.00
              <span className="text-sm font-normal text-white/70">/month</span>
            </div>
            
            <div className="space-y-4 mb-8 flex-grow">
              <h4 className="font-semibold">Core Features:</h4>
              <PlanFeature text="1 Admin Account" />
              <PlanFeature text="3 Active Projects" />
              <PlanFeature text="Client Access- 1 guest per project" />
              <PlanFeature text="2GB Storage" />
              
              <h4 className="font-semibold mt-6">Additional Features:</h4>
              <PlanFeature text="Basic Project Workflow (Edit, Revision, Approval)" />
              <PlanFeature text="Timecode-Based Comments for precise feedback" />
              <PlanFeature text="Simple File Sharing for client uploads/downloads" />
            </div>
            
            <Button className="w-full">Get Started for Free</Button>
          </Card>

          {/* Basic Plan */}
          <Card className="glass p-6 flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Basic</h3>
            <p className="text-white/70 mb-6">For Small Agencies or Freelancers</p>
            <div className="text-3xl font-bold mb-4">
              ${basicPrice.toFixed(2)}
              <span className="text-sm font-normal text-white/70">/month</span>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-white/70 mb-2">Storage: {basicStorage}GB</p>
              <Slider
                value={[basicStorage]}
                onValueChange={(value) => setBasicStorage(value[0])}
                min={250}
                max={2000}
                step={100}
                className="mb-4"
              />
            </div>
            
            <div className="space-y-4 mb-8 flex-grow">
              <h4 className="font-semibold">Core Features:</h4>
              <PlanFeature text="1 Admin Account" />
              <PlanFeature text="5 Team Members" />
              <PlanFeature text="25 Active Projects" />
              <PlanFeature text="Client Access- Up to 3 guests per project" />
              
              <h4 className="font-semibold mt-6">Additional Features:</h4>
              <PlanFeature text="Advanced Project Workflow: Status tracking" />
              <PlanFeature text="Timecode-Based Comments for precise feedback" />
              <PlanFeature text="Customizable Roles and Permissions" />
              <PlanFeature text="Basic Analytics to track project statuses" />
            </div>
            
            <Button className="w-full">Get Started</Button>
          </Card>

          {/* Pro Plan */}
          <Card className="glass p-6 flex flex-col border-primary">
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <p className="text-white/70 mb-6">For Growing Agencies or Teams</p>
            <div className="text-3xl font-bold mb-4">
              ${proPrice.toFixed(2)}
              <span className="text-sm font-normal text-white/70">/month</span>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-white/70 mb-2">Storage: {proStorage}GB</p>
              <Slider
                value={[proStorage]}
                onValueChange={(value) => setProStorage(value[0])}
                min={500}
                max={5000}
                step={100}
                className="mb-4"
              />
            </div>
            
            <div className="space-y-4 mb-8 flex-grow">
              <h4 className="font-semibold">Core Features:</h4>
              <PlanFeature text="3 Admin Accounts" />
              <PlanFeature text="50 Team Members" />
              <PlanFeature text="100 Active Projects" />
              <PlanFeature text="Client Access- Up to 10 guests per project" />
              
              <h4 className="font-semibold mt-6">Additional Features:</h4>
              <PlanFeature text="Custom Branding: Add your logo and colors" />
              <PlanFeature text="Priority Support" />
              <PlanFeature text="Reference Library for editing styles" />
              <PlanFeature text="Collaborative Tools: Tasks, deadlines, tracking" />
            </div>
            
            <Button className="w-full">Get Started</Button>
          </Card>

          {/* Enterprise Plan */}
          <Card className="glass p-6 flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
            <p className="text-white/70 mb-6">Custom Solutions for Large Teams</p>
            <div className="text-3xl font-bold mb-8">
              Custom
              <span className="text-sm font-normal text-white/70 block">Contact us for pricing</span>
            </div>
            
            <div className="space-y-4 mb-8 flex-grow">
              <h4 className="font-semibold">Everything in Pro, plus:</h4>
              <PlanFeature text="Unlimited Team Members" />
              <PlanFeature text="Unlimited Active Projects" />
              <PlanFeature text="Custom Storage Solutions" />
              <PlanFeature text="Dedicated Account Manager" />
              <PlanFeature text="24/7 Priority Support" />
              <PlanFeature text="Custom Integration Development" />
              <PlanFeature text="On-Premise Deployment Options" />
            </div>
            
            <Button variant="outline" className="w-full">Contact Sales</Button>
          </Card>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="glass p-6">
            <h3 className="text-xl font-bold mb-4">Why Basic?</h3>
            <p className="text-white/70">
              Perfect for freelancers and small teams looking to streamline their video editing workflow. Get organized with project management tools and client collaboration features at an affordable price.
            </p>
          </Card>
          
          <Card className="glass p-6">
            <h3 className="text-xl font-bold mb-4">Why Pro?</h3>
            <p className="text-white/70">
              Ideal for growing agencies that need advanced features like custom branding, extensive team collaboration tools, and priority support. Scale your video production business with confidence.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};