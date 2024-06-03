import { Button } from "@/components/ui/button";
import { useEffect } from "react";


export const AddButton = (props: any) => {
  const { data, id } = props;

  return (
    <Button variant="outline" className="rounded-full h-auto p-1.5" onClick={() => data.onAddNodeCallback(id)}>
        <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5"/>
        </svg>
    </Button>
  );
};