/**
 * NewsletterForm - Reusable newsletter subscription form
 * Auto-layout: Responsive flex layout, button alignment
 */
import { useState } from 'react';
import Button from '../Button';
import Input from './Input';
import Flex from '../layout/Flex';

const NewsletterForm = ({ 
  onSubmit,
  placeholder = 'Enter your email',
  buttonText = 'Subscribe',
  variant = 'dark', // 'dark' | 'light'
  className = '' 
}) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(email);
    } else {
      alert(`Subscribed with: ${email}`);
    }
    setEmail('');
  };

  const inputClasses = variant === 'dark' 
    ? 'bg-white/10 border-white/20 text-white placeholder-neutral-400'
    : 'bg-white border-neutral-300 text-neutral-900 placeholder-neutral-500';

  return (
    <form onSubmit={handleSubmit} className={className}>
      <Flex 
        direction="col" 
        align="stretch"
        gap="md"
        responsive={{ sm: { direction: 'row', align: 'stretch' } }}
      >
        <Input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          size="lg"
          variant="outline"
          className={`flex-1 ${inputClasses}`}
        />
        <Button 
          type="submit" 
          size="lg" 
          className="w-full sm:w-auto"
        >
          {buttonText}
        </Button>
      </Flex>
    </form>
  );
};

export default NewsletterForm;

