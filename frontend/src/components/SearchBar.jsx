import { useState } from 'react';
import StyledPrimaryButton from './StyledPrimaryButton';
import { MdSearch } from 'react-icons/md';

export default function SearchBar({ text = 'Enter placeholder text' }) {
  const [searchVal, setSearchVal] = useState('');
  const handleSearch = (e) => {
    setSearchVal(e.target.value);
  };
  return (
    <div className="border rounded border-primary">
      <StyledPrimaryButton icon={<MdSearch />} />
      <input
        type="search"
        placeholder={text}
        onChange={handleSearch}
        value={searchVal}
      />
    </div>
  );
}
