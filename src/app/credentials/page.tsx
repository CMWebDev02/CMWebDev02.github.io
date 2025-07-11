import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion } from "@radix-ui/react-accordion";

export default function CredentialsPage() {
  const CertificationItems = ["Bay Valley Tech", "Modesto Junior College", "Test Out", "Adobe", "CompTIA"];

  return (
    <Card className="w-full lg:w-11/12 xl:w-4/5 h-full md:h-11/12 max-h-full md:max-h-11/12 overflow-scroll">
      <CardHeader>
        <CardTitle className="text-md md:text-3xl">Certifications / Degrees</CardTitle>
      </CardHeader>
      <CardContent className="h-full">
        <Accordion type="single" collapsible>
          {CertificationItems}
        </Accordion>
      </CardContent>
    </Card>
  );
}
