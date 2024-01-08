import { Button, Stack } from '@mui/joy';
import DropboxChooser from 'react-dropbox-chooser';
import useDrivePicker from 'react-google-drive-picker';

import Icon from '../../components/common/Icon/Icon';


const PdfLoadFileVariants = ({ updateSetFile }) => {
  // eslint-disable-next-line no-unused-vars
  const [openPicker, authResponse] = useDrivePicker();

  const handleOpenPicker = () => {
    openPicker({
      clientId: '618793762967-s67hrtc6dsasena891pvcostou61s420.apps.googleusercontent.com',
      developerKey: 'AIzaSyBcaZqjJeyUTWeH2zlW-E22D-Aw3UTyG_Q',
      viewMimeTypes: 'image/gif,image/jpeg,image/png,application/vnd.google-apps.document',
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: false,
      callbackFunction: (data) => {
        if (data.action === 'picked') {
          updateSetFile(data.docs[0]);
        }
      },
    });
  };

  const handleOpenDropBoxPicker = (file) => {
    if (file.length > 0) {
      updateSetFile(file[0]);
    }
  };

  const buttonList = [
    {
      title: 'DropBox',
      icon: 'drop-box',
      parenComponent: <DropboxChooser
        appKey='6oe07frbxs0pnhr'
        success={handleOpenDropBoxPicker}
        extensions={['.png', '.pdf']}
      />
    },
    {
      title: 'One drive',
      icon: 'one-drive',
    },
    {
      title: 'Google drive',
      icon: 'google-drive',
      onClick: handleOpenPicker
    },
  ];

  const renderButton = ({ title, icon, parentComponent, onClick }) => {
    const buttonElement = (
      <Button
        variant='outlined'
        aria-label={title}
        onClick={onClick}
        sx={{
          transition: 'all 0.3s linear',
          backgroundColor: 'background.body',
          borderRadius: 'sm',
          color: 'primary',
          p: 2,
          fontSize: 'lg',
        }}
      >
        <Icon name={icon} />
      </Button>
    );

    return parentComponent ? React.cloneElement(parentComponent, {}, buttonElement) : buttonElement;
  };


  return (
    <Stack spacing={2} direction='row' justifyContent='center' mt={3}>
      {buttonList.map(({ title, icon, parentComponent, onClick }, index) => renderButton({ title, icon, parentComponent, onClick }, index))}
    </Stack>
  );
};

export default PdfLoadFileVariants;
