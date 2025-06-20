
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogIn, Settings, LogOut } from 'lucide-react';

const AuthButton = () => {
  const { user, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();

  if (user) {
    return (
      <div className="flex items-center gap-2">
        {isAdmin && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate('/admin')}
          >
            <Settings className="w-4 h-4 mr-2" />
            Admin
          </Button>
        )}
        <Button 
          variant="outline" 
          size="sm" 
          onClick={signOut}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={() => navigate('/auth')}
    >
      <LogIn className="w-4 h-4 mr-2" />
      Sign In
    </Button>
  );
};

export default AuthButton;
