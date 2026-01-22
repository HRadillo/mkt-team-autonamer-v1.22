import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Check, X, ChevronDown } from 'lucide-react';

// Common base style for inputs to ensure consistent "Glow" effect
const BASE_INPUT_STYLE = `
  w-full bg-zinc-900 text-white text-sm rounded-md px-3 py-2.5
  border border-zinc-800 outline-none 
  transition-all duration-300 ease-out
  placeholder:text-zinc-700
  focus:border-[#ffff99] focus:shadow-[0_0_20px_rgba(255,255,153,0.6)]
  hover:border-zinc-600 hover:shadow-[0_0_15px_rgba(255,255,153,0.5)]
`;

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  className?: string;
}

export const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, placeholder, className = '' }) => {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-xs font-semibold text-zinc-400 tracking-wide uppercase">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={BASE_INPUT_STYLE}
      />
    </div>
  );
};

interface DataListFieldProps extends InputFieldProps {
  options: string[];
}

export const DataListField: React.FC<DataListFieldProps> = ({ label, value, onChange, options, placeholder, className = '' }) => {
  const sortedOptions = useMemo(() => {
    return [...options].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
  }, [options]);

  const id = `datalist-${label.replace(/\s+/g, '-').toLowerCase()}`;
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-xs font-semibold text-zinc-400 tracking-wide uppercase">
        {label}
      </label>
      <div className="relative">
        <input
          list={id}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={BASE_INPUT_STYLE}
        />
        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-zinc-500">
           <ChevronDown size={14} />
        </div>
      </div>
      <datalist id={id}>
        {sortedOptions.map((opt) => (
          <option key={opt} value={opt} />
        ))}
      </datalist>
    </div>
  );
};

interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  options: string[];
  placeholder?: string;
  className?: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  className = ''
}) => {
  const sortedOptions = useMemo(() => {
    // IMPORTANT: copy before sort to avoid mutating caller arrays
    return [...options].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
  }, [options]);

  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // When dropdown is open, we filter by `search`. When closed, we show the selected value.
  const filteredOptions = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return sortedOptions;
    return sortedOptions.filter(opt => opt.toLowerCase().includes(q));
  }, [sortedOptions, search]);

  useEffect(() => {
    const onDocMouseDown = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', onDocMouseDown);
    return () => document.removeEventListener('mousedown', onDocMouseDown);
  }, []);

  const open = () => {
    setIsOpen(true);
    setSearch('');
    // focus after state update
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const selectOption = (opt: string) => {
    onChange(opt);
    setIsOpen(false);
    setSearch('');
  };

  const displayValue = isOpen ? search : (value || '');
  const displayPlaceholder = isOpen ? 'Type to search...' : (placeholder || 'Select...');

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-xs font-semibold text-zinc-400 tracking-wide uppercase">
        {label}
      </label>

      <div ref={containerRef} className="relative">
        <input
          ref={inputRef}
          value={displayValue}
          onChange={(e) => {
            setSearch(e.target.value);
            if (!isOpen) setIsOpen(true);
          }}
          onFocus={() => {
            // Open and show ALL options by default (no filtering by selected value)
            if (!isOpen) open();
          }}
          onClick={() => {
            if (!isOpen) open();
          }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setIsOpen(false);
              setSearch('');
              (e.target as HTMLInputElement).blur();
            }
            if (e.key === 'Enter' && isOpen) {
              e.preventDefault();
              if (filteredOptions.length > 0) {
                selectOption(filteredOptions[0]);
              }
            }
          }}
          placeholder={displayPlaceholder}
          className={`${BASE_INPUT_STYLE} pr-10`}
        />

        <button
          type="button"
          aria-label="Toggle dropdown"
          onClick={() => {
            if (isOpen) {
              setIsOpen(false);
              setSearch('');
            } else {
              open();
            }
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition-colors"
        >
          <ChevronDown size={16} />
        </button>

        {isOpen && (
          <div className="absolute z-20 mt-2 w-full rounded-md border border-zinc-800 bg-zinc-950 shadow-lg overflow-hidden">
            <div className="max-h-56 overflow-y-auto">
              {/* Optional "Select..." row */}
              <button
                type="button"
                onClick={() => {
                  onChange('');
                  setIsOpen(false);
                  setSearch('');
                }}
                className="w-full text-left px-3 py-2 text-xs text-zinc-400 hover:bg-zinc-900 transition-colors"
              >
                Select...
              </button>

              {filteredOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => selectOption(opt)}
                  className={`w-full text-left px-3 py-2 text-xs transition-colors ${
                    opt === value ? 'bg-zinc-800 text-white' : 'text-white hover:bg-zinc-900'
                  }`}
                >
                  {opt}
                </button>
              ))}

              {filteredOptions.length === 0 && (
                <div className="px-3 py-2 text-xs text-zinc-500">
                  No matches
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const MultiSelectField: React.FC<MultiSelectFieldProps> = ({ label, value, onChange, options, placeholder, className = '' }) => {
  const sortedOptions = useMemo(() => {
    return [...options].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
  }, [options]);

  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedValues = value ? value.split('-').filter(Boolean) : [];

  const filteredOptions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sortedOptions;
    return sortedOptions.filter(opt => opt.toLowerCase().includes(q));
  }, [sortedOptions, query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleOption = (option: string) => {
    let newValues;
    if (selectedValues.includes(option)) {
      newValues = selectedValues.filter(v => v !== option);
    } else {
      newValues = [...selectedValues, option];
    }
    onChange(newValues.join('-'));
  };

  const removeValue = (e: React.MouseEvent, option: string) => {
    e.stopPropagation();
    onChange(selectedValues.filter(v => v !== option).join('-'));
  };

  return (
    <div className={`flex flex-col gap-1.5 ${className}`} ref={containerRef}>
      <label className="text-xs font-semibold text-zinc-400 tracking-wide uppercase">
        {label}
      </label>
      <div className="relative">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`
            w-full bg-zinc-900 text-white text-sm rounded-md px-3 py-2.5
            border cursor-pointer transition-all duration-300 ease-out min-h-[42px]
            flex flex-wrap items-center gap-2
            hover:shadow-[0_0_15px_rgba(255,255,153,0.5)]
            ${isOpen 
              ? 'border-[#ffff99] shadow-[0_0_20px_rgba(255,255,153,0.6)]' 
              : 'border-zinc-800 hover:border-zinc-600'}
          `}
        >
          {selectedValues.length === 0 && (
            <span className="text-zinc-500 italic">{placeholder || 'Select tags...'}</span>
          )}
          {selectedValues.map(val => (
            <span key={val} className="bg-[#ffff99] text-black text-[11px] font-bold px-1.5 py-0.5 rounded-sm flex items-center gap-1 shadow-sm leading-tight">
              {val}
              <button onClick={(e) => removeValue(e, val)} className="hover:text-red-600 focus:outline-none flex items-center justify-center rounded-full hover:bg-black/10 transition-colors">
                <X size={10} />
              </button>
            </span>
          ))}
          <div className="ml-auto pointer-events-none text-zinc-500">
             <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </div>

        {isOpen && (
          <div className="absolute z-50 w-full mt-1 bg-zinc-950 border border-zinc-700 rounded-md shadow-2xl max-h-60 overflow-y-auto ring-1 ring-zinc-800">
            <div className="p-2 border-b border-zinc-800 bg-zinc-950/60">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type to filter..."
                className={`${BASE_INPUT_STYLE} py-2 text-xs`}
              />
            </div>
            {filteredOptions.map(opt => {
              const isSelected = selectedValues.includes(opt);
              return (
                <div
                  key={opt}
                  onClick={() => toggleOption(opt)}
                  className={`
                    px-3 py-2 text-sm cursor-pointer flex items-center justify-between transition-colors
                    ${isSelected ? 'bg-zinc-900 text-[#ffff99]' : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'}
                  `}
                >
                  <span className="font-medium">{opt}</span>
                  {isSelected && <Check size={14} className="text-[#ffff99]" />}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export const CheckboxField: React.FC<{ label: string; checked: boolean; onChange: (val: boolean) => void }> = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center gap-3 mt-6 group">
      <button
        onClick={() => onChange(!checked)}
        className={`
          w-6 h-6 rounded border flex items-center justify-center transition-all duration-300
          group-hover:shadow-[0_0_10px_rgba(255,255,153,0.5)]
          ${checked 
            ? 'bg-[#ffff99] border-[#ffff99] shadow-[0_0_15px_rgba(255,255,153,0.5)]' 
            : 'bg-zinc-900 border-zinc-700 hover:border-zinc-500'}
        `}
      >
        {checked && (
          <Check size={14} className="text-black" strokeWidth={4} />
        )}
      </button>
      <span className="text-sm font-medium text-zinc-200 select-none cursor-pointer group-hover:text-white transition-colors" onClick={() => onChange(!checked)}>
        {label}
      </span>
    </div>
  );
};
