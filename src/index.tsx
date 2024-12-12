import {
  requireNativeComponent,
  UIManager,
  Platform, findNodeHandle,
  type ViewProps,
  View,
} from 'react-native';
import { useEffect, useRef, type MutableRefObject } from 'react';

const LINKING_ERROR =
  `The package 'react-native-aws-face-live-ness' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: '- You have run \'pod install\'\n', default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

interface AwsFaceLiveNessProps extends ViewProps {
  sessionId: string;
  ref?: MutableRefObject<any>;

}

const ComponentName = 'AwsFaceLiveNessComposeManger';
const AwsFaceLiveNessComposeManger =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<AwsFaceLiveNessProps>(ComponentName)
    : () => {
      throw new Error(LINKING_ERROR);
    };
const createFragment = (viewId: any) => {
  UIManager.dispatchViewManagerCommand(
    viewId,
    // we are calling the 'create' command
    (UIManager as any)?.AwsFaceLiveNessComposeManger?.Commands.create.toString(),
    [viewId],
  );
};
const AwsFaceLiveNess = (props: AwsFaceLiveNessProps) => {
  const ref = useRef(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      const viewId = findNodeHandle(ref.current);
      createFragment(viewId);
    });

    return () => {
      cancelAnimationFrame(id);
    };
  }, []);

  return (
    <View style={{flex: 1}}>
      <AwsFaceLiveNessComposeManger
        style={{
          width: 200,
          height: 200,
        }}
        sessionId={props.sessionId ?? ''}
        ref={ref}
      />
    </View>
  );
};
export default AwsFaceLiveNess
