import type { Credential } from "@/lib/types";
import { ScrollArea } from "../ui/scroll-area";
import { Card, CardContent, CardHeader } from "../ui/card";

interface CredentialListProps {
  credentialsArray: Credential[];
}

export default function CredentialList({
  credentialsArray,
}: CredentialListProps) {
  const CredentialItems = credentialsArray.map((credential) => {
    return (
      <div key={credential.credentialTitle} className="p-1">
        <Card className="bg-primary-background/70">
          <CardHeader className="text-md md:text-xl">{credential.credentialTitle}</CardHeader>
          <CardContent className="text-sm md:text-md text-card-text">{credential.credentialDescription}</CardContent>
        </Card>
      </div>
    );
  });

  return (
    <ScrollArea className="w-full h-full max-h-full">
      {CredentialItems}
    </ScrollArea>
  );
}
