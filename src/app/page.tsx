/*
 * @Date         : 2024-12-07 20:22:22
 * @LastEditTime : 2024-12-10 22:28:54
 * @FilePath     : /src/app/page.tsx
 * @Description  :
 *
 * Copyright (c) 2024 by Jay@lang, All Rights Reserved.
 */

import Mint from "./mint/page";

export default function Home() {
  return (
    <div className="min-h-[90vh] font-[family-name:var(--font-geist-sans)]">
      <Mint />
    </div>
  );
}
