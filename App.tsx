import * as React from 'react';
import AppbarAction from './src/components/Appbar.action';
import AvatarIcon from './src/components/Avatar/Avatar.Icon';
import {Badge, Banner} from 'react-native-paper';
import TextButton from './src/components/Button/TextButton';
import OutlineButton from './src/components/Button/OutlineButton';
import ElevatedButton from './src/components/Button/ElevatedButton';
import ContainedTonalButton from './src/components/Button/ContainedTonalButton';
import CardActions from './src/components/Card/Card.Actions';
import CardContent from './src/components/Card/Card.Content';
import CardCover from './src/components/Card/Card.Cover';
import CardTitle from './src/components/Card/Card.Title';
import {ScrollView} from 'react-native';
import CheckBox from './src/components/Chechbox/Checkbox';
import CheckboxItem from './src/components/Chechbox/Chechbox.Item';
import ChipFlat from './src/components/Chip/Chip.Flat';
import ChipOutlined from './src/components/Chip/Chip.Outlined';
import Datatable from './src/components/DataTable/Datatable';
import DatatableCell from './src/components/DataTable/Datatable.Cell';
import DatatableHeader from './src/components/DataTable/Datatable.Header';
import DatatablePagination from './src/components/DataTable/Datatable.Pagination';
import DatatableRow from './src/components/DataTable/Datatable.Row';
import DatatableTitle from './src/components/DataTable/Datatable.Title';
import DialogActions from './src/components/Dialog/Dialog.Actions';
import DialogContent from './src/components/Dialog/Dialog.Content';
import DialogIcon from './src/components/Dialog/Dialog.Icon';
import DialogScrollArea from './src/components/Dialog/Dialog.ScrollArea';
import Separator from './src/components/Divider/Separator';
import DrawerCollapItem from './src/components/Drawer/Drawer.CollapItem';
import DrawerItem from './src/components/Drawer/Drawer.Item';
import DrawerSection from './src/components/Drawer/Drawer.Section';
// import FabAllVariants from './src/components/FAB/FabAllVariants';
// import FabAllSize from './src/components/FAB/FabAllSize';
// import FabAllModes from './src/components/FAB/FabAllModes';
// import FabWithLabel from './src/components/FAB/FabWithLabel';
// import AnimatedFab from './src/components/FAB/AnimatedFab';
import AnimatedGroup from './src/components/FAB/Fab.Group';
import TextHelper from './src/components/HelperText/TextHelper';
import Icons from './src/components/Icon/Icons';
import IconDefault from './src/components/Icon/IconButton/IconDefault';
import IconOutlined from './src/components/Icon/IconButton/IconOutlined';
import IconContained from './src/components/Icon/IconButton/IconContained';
import IconContainedTonal from './src/components/Icon/IconButton/IconContainedTonal';
import ListIcon from './src/components/List/Accordion/List.Icon';
import ListDesc from './src/components/List/Accordion/List.Desc';
import ListItemIcon from './src/components/List/Accordion/List.ItemsIcon';
import ListGroup from './src/components/List/AccordionGroup/List.Group';
import ListItemsIcon from './src/components/List/List.ItemsIcon';
import ListItem from './src/components/List/List.Item';
import ListSection from './src/components/List/ListSection';
import ListSubheader from './src/components/List/ListSubheader';
import MenuIcons from './src/components/Menu/Menu.Icons';
import ModalView from './src/components/Modal/Modal';
import Progressbar from './src/components/Bar/Progessbar';
import RadioBtn from './src/components/Button/Radio.Button';
import SearchBar from './src/components/Bar/SearchBar';
import SegmentedButton from './src/components/Button/SegmentedButton';
import SnackBar from './src/components/Bar/SnackBar';
import SwitchActions from './src/components/Switch/Switch.Actions';
import InputText from './src/components/Input/InputText';
import Ripple from './src/components/Ripple';
import TooltipAction from './src/components/Tooltip.action';
const App = () => {
  return (
    <ScrollView>
      <AppbarAction />
      <AvatarIcon />
      <Badge />
      <Banner visible={true} children={'Component Banner'} />
      <TextButton />
      <OutlineButton />
      <OutlineButton />
      <ElevatedButton />
      <ContainedTonalButton />
      <CardActions />
      <CardContent />
      <CardCover />
      <CardTitle />
      <CheckBox />
      <CheckboxItem children="checked" />
      <ChipFlat />
      <ChipOutlined />
      <DatatableHeader />
      <Datatable />
      <DatatableCell />
      <DatatablePagination />
      <DatatableRow />
      <DatatableTitle />
      <DialogActions />
      <DialogContent />
      <DialogIcon />
      <DialogScrollArea />
      <Separator />
      <DrawerCollapItem />
      <DrawerItem />
      <DrawerSection />
      <AnimatedGroup />
      {/* <FabAllVariants />
      <FabAllSize />
      <FabAllModes />
      <FabWithLabel />
      <AnimatedFab animatedValue={true} label="Title Fab" /> */}
      <TextHelper />
      <Icons />
      <IconDefault />
      <IconOutlined />
      <IconContained />
      <IconContainedTonal />
      <ListIcon />
      <ListDesc />
      <ListItemIcon />
      <ListGroup />
      <ListItemsIcon />
      <ListItem />
      <ListSection />
      <ListSubheader />
      <MenuIcons />
      <ModalView />
      <Progressbar />
      <RadioBtn />
      <SearchBar />
      <SegmentedButton />
      <SnackBar />
      <SwitchActions />
      <InputText />
      <Ripple />
      <TooltipAction />
    </ScrollView>
  );
};

export default App;
