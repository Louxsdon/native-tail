import { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import tw from "twrnc";
import { Button, Input, Modal, Text, Title, View, Pane } from "./src";
import { Card, CardBody, CardImage } from "./src/Card";

export default function App() {
  const [open, setopen] = useState(false);

  return (
    <SafeAreaView style={tw`mt-12 w-full`}>
      <ScrollView style={{ padding: 30 }}>
        <View style={[`bg-blue-50 p-4 mb-3 flex-row`]}>
          <View style={"mr-4"}>
            <Button>Primary</Button>
            <Button type="secondary">Secondary</Button>
            <Button type="success">Success</Button>
            <Button type="warning">Warning</Button>
            <Button type="danger">Danger</Button>
            <Button type="info">Info</Button>
          </View>
          <View style="mr-4">
            <Button outline>Primary</Button>
            <Button outline type="secondary">
              Secondary
            </Button>
            <Button outline type="success">
              Success
            </Button>
            <Button outline type="warning">
              Warning
            </Button>
            <Button outline type="danger">
              Danger
            </Button>
            <Button outline type="info">
              Info
            </Button>
          </View>
          <View>
            <Button rounded>Primary</Button>
            <Button rounded type="secondary">
              Secondary
            </Button>
            <Button rounded type="success">
              Success
            </Button>
            <Button rounded type="warning">
              Warning
            </Button>
            <Button rounded type="danger">
              Danger
            </Button>
            <Button rounded type="info">
              Info
            </Button>
          </View>
        </View>

        {/* modal */}
        <Modal onDismis={() => setopen(false)} visible={open}>
          <Title bold>Awesome Modal</Title>
          <Text>
            Concretely, DropAPIMeta can take any type via the generic type T,
            and apply our Exclude and Pick type helpers, to pick the resulting
            types of the exclusion of APIMetaProps from type T.
          </Text>
          <View style="items-end mt-2">
            <Button type="danger" onPress={() => setopen(false)}>
              Close
            </Button>
          </View>
        </Modal>

        <Title size="xl" style="text-5xl">
          Sign In
        </Title>

        <Input rounded label="Username" placeholder="Username" />
        <Input disable placeholder="Password" secureTextEntry />
        <Button onPress={() => setopen(true)}>Login</Button>

        {/* Pane */}
        <Pane style="mt-4 items-start">
          <Title size="base">Title Here</Title>
          <Text>
            Concretely, DropAPIMeta can take any type via the generic type T,
            and apply our Exclude and Pick type helpers, to pick the resulting
            types of the exclusion.
          </Text>
          <Button type="success">Click Here</Button>
        </Pane>

        <Card style="mt-4 ">
          <CardImage
            source={require("./assets/img1.jpg")}
            resizeMode="cover"
            imageStyle="w-full h-48"
          />

          <CardBody>
            <Title bold>The Ocean View</Title>
            <Text>
              Concretely, DropAPIMeta can take any type via the generic type T,
              and apply our Exclude and Pick type helpers, to pick the resulting
              types of the exclusion.
            </Text>
            <Button style="mt-4" outline>
              Visit Here
            </Button>
          </CardBody>
        </Card>

        <View style="mb-16" />
      </ScrollView>
    </SafeAreaView>
  );
}
