import * as React from 'react';
import {Text, View} from 'react-native-ui-lib';
import {ScrollView} from 'react-native';
import AppbarAction from '../components/Appbar.action';
import AvatarIcon from '../components/Avatar/Avatar.Icon';
import Badge from '../components/Badge/Badge';
import TextButton from '../components/Button/TextButton';
import OutlineButton from '../components/Button/OutlineButton';
import ElevatedButton from '../components/Button/ElevatedButton';
import ContainedTonalButton from '../components/Button/ContainedTonalButton';
import CardActions from '../components/Card/Card.Actions';
import CardContent from '../components/Card/Card.Content';
import CardCover from '../components/Card/Card.Cover';
import CardTitle from '../components/Card/Card.Title';
import CheckBox from '../components/Chechbox/Checkbox';
import CheckboxItem from '../components/Chechbox/Chechbox.Item';
import ChipFlat from '../components/Chip/Chip.Flat';
import ChipOutlined from '../components/Chip/Chip.Outlined';
import DatatableHeader from '../components/DataTable/Datatable.Header';
import Datatable from '../components/DataTable/Datatable';
import DatatableCell from '../components/DataTable/Datatable.Cell';
import DatatablePagination from '../components/DataTable/Datatable.Pagination';
import DatatableRow from '../components/DataTable/Datatable.Row';
import DatatableTitle from '../components/DataTable/Datatable.Title';
import DialogActions from '../components/Dialog/Dialog.Actions';
import DialogContent from '../components/Dialog/Dialog.Content';
import DialogIcon from '../components/Dialog/Dialog.Icon';
import DialogScrollArea from '../components/Dialog/Dialog.ScrollArea';
import Separator from '../components/Divider/Separator';
import DrawerCollapItem from '../components/Drawer/Drawer.CollapItem';
import DrawerItem from '../components/Drawer/Drawer.Item';
import DrawerSection from '../components/Drawer/Drawer.Section';
import AnimatedGroup from '../components/FAB/Fab.Group';
import BannerComponent from '../components/Banner/Banner';

import {useTheme} from 'react-native-paper';
import Loader from '../components/Loader';

const HelpUs = () => {
  const theme = useTheme();
  return (
    <View padding-8 margin-8>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View paddingT-4>
          <Text text30 red20>
            Appbar Action
          </Text>
          <AppbarAction />
        </View>
        <Separator />
        <View paddingT-4>
          <Text text30 red20>
            Avatar Icon
          </Text>
          <AvatarIcon />
        </View>
        <Separator />
        <View paddingT-4>
          <Text text30 red20>
            Badge
          </Text>
          <Badge />
        </View>
        <View paddingT-4>
          <Text text30 red20>
            <BannerComponent />
          </Text>
        </View>
        <Separator />
        <View paddingT-4>
          <Text text30 red20>
            Button
          </Text>
          <TextButton />
          <OutlineButton />
          <ElevatedButton />
          <ContainedTonalButton />
        </View>
        <Separator />
        <View paddingT-4>
          <Text text30 red20>
            Card
          </Text>
          <CardActions />
          <CardContent />
          <CardCover />
          <CardTitle />
        </View>
        <Separator />
        <View paddingT-4>
          <Text text30 red20>
            Checkbox
          </Text>
          <CheckBox />
          <CheckboxItem children="checked" />
        </View>
        <Separator />
        <View paddingT-4>
          <Text text30 red20>
            Chip
          </Text>
          <ChipFlat />
          <ChipOutlined />
        </View>
        <Separator />
        <View paddingT-4>
          <Text text30 red20>
            Datatable
          </Text>
          <DatatableHeader />
          <Datatable />
          <DatatableCell />
          <DatatablePagination />
          <DatatableRow />
          <DatatableTitle />
        </View>
        <Separator />
        <View paddingT-4>
          <Text text30 red20>
            Dialog
          </Text>
          <DialogActions />
          <DialogContent />
          <DialogIcon />
          <DialogScrollArea />
        </View>
        <Separator />
        <View paddingT-4>
          <Text text30 red20>
            Divider
          </Text>
          <Separator />
        </View>
        <Separator />
        <View paddingT-4>
          <Text text30 red20>
            Drawer
          </Text>
          <DrawerCollapItem />
          <DrawerItem />
          <DrawerSection />
        </View>
        <Separator />
        <View paddingT-4>
          <Text text30 red20>
            Drawer
          </Text>
          <Loader />
        </View>
        <Separator />
        <View paddingT-4>
          <Text text30 red20>
            Animation
          </Text>
          <AnimatedGroup />
        </View>
      </ScrollView>
    </View>
  );
};

export default HelpUs;
