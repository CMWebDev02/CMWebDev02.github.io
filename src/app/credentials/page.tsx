import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CredentialList from "@/components/client/credential-list";
import { credentialsArray } from "@/lib/utils";

export default function CredentialsPage() {
  const CredentialItems = [
    "Bay Valley Tech",
    "Modesto Junior College",
    "CompTIA",
    "TestOut",
    "Adobe",
    "LearnKey",
  ].map((institute) => {
    const filteredCredentials = credentialsArray.filter(
      (credential) => credential.credentialInstitute === institute
    );
    return (
      <AccordionItem value={institute} key={institute}>
        <AccordionTrigger>{institute}</AccordionTrigger>
        <AccordionContent className="w-full flex justify-center items-center">
          <CredentialList credentialsArray={filteredCredentials} />
        </AccordionContent>
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
