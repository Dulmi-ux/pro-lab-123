import Image from "next/image";
import { type Professional } from "@/data/professionals";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, Briefcase } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SupportCardProps {
  professional: Professional;
}

export function SupportCard({ professional }: SupportCardProps) {
  const { toast } = useToast();

  const handleRequestSupport = () => {
    toast({
      title: "Support Request Sent",
      description: `Your request has been sent to ${professional.name}. They will be in touch shortly.`,
    });
  };

  return (
    <Card className="flex flex-col text-center items-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-6">
        <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/20">
          <AvatarImage src={professional.avatar} alt={professional.name} data-ai-hint={professional.data_ai_hint} />
          <AvatarFallback>{professional.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl font-headline">{professional.name}</CardTitle>
        <p className="text-sm text-primary font-medium">{professional.specialization}</p>
      </CardHeader>
      <CardContent className="p-6 pt-0 flex-grow">
        <p className="text-muted-foreground">{professional.bio}</p>
        <div className="flex justify-center gap-4 mt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-primary/80" />
                <span>{professional.specialization}</span>
            </div>
            <div className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-primary/80" />
                <span>{professional.experience} years exp.</span>
            </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 w-full">
        <Button className="w-full" onClick={handleRequestSupport}>Request Support</Button>
      </CardFooter>
    </Card>
  );
}
