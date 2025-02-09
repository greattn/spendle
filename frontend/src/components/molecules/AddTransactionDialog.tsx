import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddIncomeTab } from "./AddIncomeTab";
import { AddExpenseTab } from "./AddExpenseTab";

export function AddTransactionDialog() {
  return (
    <Dialog>
      <DialogTrigger
        className="
      absolute bottom-8 left-4
      bg-primary text-white px-4 py-2 rounded-md
      w-full max-w-56
      flex items-center justify-center
      hover:bg-primary/80 active:bg-primary/60
      shadow-lg
      transition-all duration-300
      hover:scale-105
      active:scale-95
      "
      >
        Add Transaction...
      </DialogTrigger>

      <DialogContent className="w-full max-w-4xl">
        <DialogHeader>
          <DialogTitle>Add your transaction</DialogTitle>
          <DialogDescription>
            Add a new transaction to your account.
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="income" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="income" className="w-full">
              Income
            </TabsTrigger>
            <TabsTrigger value="expense" className="w-full">
              Expense
            </TabsTrigger>
          </TabsList>
          <TabsContent value="income">
            <AddIncomeTab />
          </TabsContent>
          <TabsContent value="expense">
            <AddExpenseTab />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
