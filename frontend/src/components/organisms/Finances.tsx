import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TransactionsTable } from "../molecules/TransactionsTable";
import { Separator } from "@/components/ui/separator";

const Finances: React.FC = () => {
  return (
    <Tabs defaultValue="finances" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="finances">Your Finances</TabsTrigger>
        <TabsTrigger value="transations">Transactions</TabsTrigger>
      </TabsList>
      <TabsContent value="finances">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Your Finances</CardTitle>
            <CardDescription>Your finances are your life.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between items-center h-16">
              <div>
                <div className="text-md font-bold">Net Worth</div>
                <div>1000</div>
              </div>
              <div>
                <div className="text-md font-bold">Total Assets</div>
                <div>1000</div>
              </div>
              <div>
                <div className="text-md font-bold">Total Liabilities</div>
                <div>1000</div>
              </div>
            </div>
          </CardContent>
          <Separator />
          <CardFooter className="pt-6">
            <div></div>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="transations">
        <Card>
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>
              View and manage your transactions here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <TransactionsTable />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Finances;
