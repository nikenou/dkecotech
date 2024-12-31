'use client';

import { useLocale } from 'next-intl';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { GlobeAltIcon } from '@heroicons/react/20/solid'
import { setLocale } from '@/i18n';
import { type Locale, locales } from '@/i18n/config';

export default function LangSwitch() {

  // 切换语言
  function onChangeLang(value: Locale) {
    const locale = value as Locale;
    setLocale(locale);
  }
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <GlobeAltIcon aria-hidden="true" className="-mr-1 size-5" />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute right-0 z-10 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {locales.map((item: Locale, index: number) => (
           
            <MenuItem key={item + index}>
              <a
                href="#"
                onClick={() => onChangeLang(item)}
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
              >
                {item}
              </a>
            </MenuItem>
          ))}
        
        </div>
      </MenuItems>
    </Menu>
  );
}