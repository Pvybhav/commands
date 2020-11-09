import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';

const handleCopyCommand = text => {
  copy(text);
  toast.info('😀 Command Copied to clipboard!', {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default handleCopyCommand;
