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
      <Card key={credential.credentialTitle}>
        <CardHeader>{credential.credentialTitle}</CardHeader>
        <CardContent>{credential.credentialDescription}</CardContent>
      </Card>
    );
  });

  return (
    <ScrollArea className="w-full h-full max-h-full">
      {CredentialItems}
    </ScrollArea>
  );
}
