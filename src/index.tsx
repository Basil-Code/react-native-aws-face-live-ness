import {
  requireNativeComponent,
  UIManager,
  Platform, findNodeHandle,
} from 'react-native';
import { useEffect, useRef } from 'react';

const LINKING_ERROR =
  `The package 'react-native-aws-face-live-ness' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: '- You have run \'pod install\'\n', default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type AwsFaceLiveNessProps = {
  sessionId: string
};

const ComponentName = 'AwsFaceLiveNessComposeManger';
const AwsFaceLiveNessComposeManger =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<AwsFaceLiveNessProps>(ComponentName)
    : () => {
      throw new Error(LINKING_ERROR);
    };
const createFragment = viewId => {
  UIManager.dispatchViewManagerCommand(
    viewId,
    // we are calling the 'create' command
    UIManager?.AwsFaceLiveNessComposeManger?.Commands.create.toString(),
    [viewId],
  );
};
const AwsFaceLiveNessCompose = () => {
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
    <AwsFaceLiveNessComposeManger
      style={{
        width: 200,
        height: 200,
      }}
      ref={ref}
    />
  );
};
export {AwsFaceLiveNessCompose}
