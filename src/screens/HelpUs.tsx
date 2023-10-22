import * as React from 'react';
import {ScrollView, Text, View} from 'react-native';
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

const HelpUs = () => {
  const theme = useTheme();
  return (
    <View>
      <ScrollView>
        <View>
          <Text
            style={{
              color: theme.colors.tertiary,
              fontSize: 48,
              textAlign: 'center',
            }}>
            Appbar Action
          </Text>
          <AppbarAction />
        </View>
        <View>
          <Text
            style={{
              color: theme.colors.tertiary,
              fontSize: 48,
              textAlign: 'center',
            }}>
            Avatar Icon
          </Text>
          <AvatarIcon />
        </View>
        <View>
          <Text
            style={{
              color: theme.colors.tertiary,
              fontSize: 48,
              textAlign: 'center',
            }}>
            Badge
          </Text>
          <Badge />
        </View>
        <View>
          <Text
            style={{
              color: theme.colors.tertiary,
              fontSize: 48,
              textAlign: 'center',
            }}>
            <BannerComponent />
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: theme.colors.tertiary,
              fontSize: 48,
              textAlign: 'center',
            }}>
            Button
          </Text>
          <TextButton />
          <OutlineButton />
          <ElevatedButton />
          <ContainedTonalButton />
        </View>
        <View>
          <Text
            style={{
              color: theme.colors.tertiary,
              fontSize: 48,
              textAlign: 'center',
            }}>
            Card
          </Text>
          <CardActions />
          <CardContent />
          <CardCover />
          <CardTitle />
        </View>
        <View>
          <Text
            style={{
              color: theme.colors.tertiary,
              fontSize: 48,
              textAlign: 'center',
            }}>
            Checkbox
          </Text>
          <CheckBox />
          <CheckboxItem children="checked" />
        </View>
        <View>
          <Text
            style={{
              color: theme.colors.tertiary,
              fontSize: 48,
              textAlign: 'center',
            }}>
            Chip
          </Text>
          <ChipFlat />
          <ChipOutlined />
        </View>
        <View>
          <Text
            style={{
              color: theme.colors.tertiary,
              fontSize: 48,
              textAlign: 'center',
            }}>
            Datatable
          </Text>
          <DatatableHeader />
          <Datatable />
          <DatatableCell />
          <DatatablePagination />
          <DatatableRow />
          <DatatableTitle />
        </View>
        <View>
          <Text
            style={{
              color: theme.colors.tertiary,
              fontSize: 48,
              textAlign: 'center',
            }}>
            Dialog
          </Text>
          <DialogActions />
          <DialogContent />
          <DialogIcon />
          <DialogScrollArea />
        </View>
        <View>
          <Text
            style={{
              color: theme.colors.tertiary,
              fontSize: 48,
              textAlign: 'center',
            }}>
            Divider
          </Text>
          <Separator />
        </View>
        <View>
          <Text
            style={{
              color: theme.colors.tertiary,
              fontSize: 48,
              textAlign: 'center',
            }}>
            Drawer
          </Text>
          <DrawerCollapItem />
          <DrawerItem />
          <DrawerSection />
        </View>
        <View>
          <Text
            style={{
              color: theme.colors.tertiary,
              fontSize: 48,
              textAlign: 'center',
            }}>
            Animation
          </Text>
          <AnimatedGroup />
        </View>
      </ScrollView>
    </View>
  );
};

export default HelpUs;
