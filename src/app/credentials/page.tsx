import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CredentialsPage() {
  const CredentialItems = [
    "Bay Valley Tech",
    "Modesto Junior College",
    "CompTIA",
    "Test Out",
    "Adobe",
  ].map((institute) => {
    const filteredCredential = [];
    return (
      <AccordionItem value={institute} key={institute}>
        <AccordionTrigger>{institute}</AccordionTrigger>
        <AccordionContent className="w-full flex justify-center items-center"></AccordionContent>
      </AccordionItem>
    );
  });

  return (
    <Card className="w-full lg:w-11/12 xl:w-4/5 h-full md:h-11/12 max-h-full md:max-h-11/12 overflow-scroll">
      <CardHeader>
        <CardTitle className="text-md md:text-3xl">
          Certifications / Degrees
        </CardTitle>
      </CardHeader>
      <CardContent className="h-full">
        <Accordion type="single" collapsible>
          {CredentialItems}
        </Accordion>
      </CardContent>
    </Card>
  );
}
