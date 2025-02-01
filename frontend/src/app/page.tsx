import styles from "./page.module.css";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button>Click me</Button>
      <Input />
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
