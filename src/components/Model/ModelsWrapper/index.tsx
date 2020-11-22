import React, { useCallback, useRef, useState } from 'react';
import ModelsContext, { CarModel } from '../ModelsContext';

import ModelsOverlay from '../ModelsOverlay';

import { Container, OverlaysRoot } from './styles';

const ModelsWrapper: React.FC = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([]);

  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels((state) => [...state, model]);
  }, []);

  const unregisterModel = useCallback((modelName: string) => {
    setRegisteredModels((state) =>
      state.filter((model) => model.modelName !== modelName),
    );
  }, []);

  const getModelByName = useCallback(
    (modelName: string) => {
      return (
        registeredModels.find((model) => model.modelName === modelName) || null
      );
    },
    [registeredModels],
  );

  return (
    <ModelsContext.Provider
      value={{
        wrapperRef,
        registeredModels,
        registerModel,
        unregisterModel,
        getModelByName,
      }}
    >
      <Container ref={wrapperRef}>
        <OverlaysRoot>
          {registeredModels.map((item) => (
            <ModelsOverlay key={item.modelName} model={item}>
              {item.overlayNode}
            </ModelsOverlay>
          ))}
        </OverlaysRoot>
        {children}
      </Container>
    </ModelsContext.Provider>
  );
};

export default ModelsWrapper;
