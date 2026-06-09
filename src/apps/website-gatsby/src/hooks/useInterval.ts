import * as React from "react";
import { interval } from "rxjs";

export function useInterval(period: number, callback: () => void) {
    React.useEffect(() => {
        const subscription = interval(period)
          .subscribe(callback)
    
        return () => subscription.unsubscribe();
      }, [])
}