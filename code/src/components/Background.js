import React, { useSelector } from "react";
import { BackgroundContainer} from "../styling/styling"

export const Background = () => {
  const gameDetails = useSelector((store) => store.gameState.gameDetails);

return(
<BackgroundContainer  >
      {gameDetails.coordinates === '0,0' && (
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f49b7fed-bb8c-4ce3-b207-f7ea09481dc9/d9u7oxs-24f33531-3420-45e8-8f70-ab8bb9cc62c0.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZjQ5YjdmZWQtYmI4Yy00Y2UzLWIyMDctZjdlYTA5NDgxZGM5XC9kOXU3b3hzLTI0ZjMzNTMxLTM0MjAtNDVlOC04ZjcwLWFiOGJiOWNjNjJjMC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.5KugH5SPj0oyEzeCrcpgipBPtOtNMzxH1MyRqvmiFro" />
      )}
      {gameDetails.coordinates === '1,0' && (
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f49b7fed-bb8c-4ce3-b207-f7ea09481dc9/d9u7om1-0a9527c7-1e95-4c90-8936-1e2c74e9185c.jpg/v1/fill/w_1024,h_576,q_75,strp/underwater_by_vityar83_d9u7om1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC9mNDliN2ZlZC1iYjhjLTRjZTMtYjIwNy1mN2VhMDk0ODFkYzlcL2Q5dTdvbTEtMGE5NTI3YzctMWU5NS00YzkwLTg5MzYtMWUyYzc0ZTkxODVjLmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.lxvz05H-RUiLIo_zxBiTkAyWPJsg1ndTkrwHjowYptI" />
      )}
      {gameDetails.coordinates === '1,1' && (
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f49b7fed-bb8c-4ce3-b207-f7ea09481dc9/db0iceu-1bdca0b1-defe-4d2c-95af-5361f30e4778.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZjQ5YjdmZWQtYmI4Yy00Y2UzLWIyMDctZjdlYTA5NDgxZGM5XC9kYjBpY2V1LTFiZGNhMGIxLWRlZmUtNGQyYy05NWFmLTUzNjFmMzBlNDc3OC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.kFAVslGK17oDiZ0i6a9iLsKkDP9EmSQp_iSlTrzsUB4" />
      )}
      {gameDetails.coordinates === '0,1' && (
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f49b7fed-bb8c-4ce3-b207-f7ea09481dc9/d7p5w94-136587c2-9874-4397-9b33-d2c80998d3c0.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZjQ5YjdmZWQtYmI4Yy00Y2UzLWIyMDctZjdlYTA5NDgxZGM5XC9kN3A1dzk0LTEzNjU4N2MyLTk4NzQtNDM5Ny05YjMzLWQyYzgwOTk4ZDNjMC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.9gNVk5UsEStHumnd_6f8gNYmgaqDEJ7D-4M6N_LeYhQ" />
      )}
      {gameDetails.coordinates === '0,2' && (
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fd88cc4d-0074-406f-8b5b-421139ed7ef1/d7awxot-38891e22-eff3-4c42-8f04-bf154b54ad89.jpg/v1/fill/w_1024,h_576,q_75,strp/statues_hall_by_julijuly_d7awxot-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC9mZDg4Y2M0ZC0wMDc0LTQwNmYtOGI1Yi00MjExMzllZDdlZjFcL2Q3YXd4b3QtMzg4OTFlMjItZWZmMy00YzQyLThmMDQtYmYxNTRiNTRhZDg5LmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.pJEGJ836uVun02Byg1qmxWPpw_GK_pobYG6FhylxXq4" />
      )}
      {gameDetails.coordinates === '0,3' && (
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/58d19be9-76f8-4690-9948-6f0ba24ac53f/d31i0as-1791ad3e-ef2b-4e65-96b5-9ca298b8ed28.jpg/v1/fill/w_900,h_540,q_75,strp/phantom_of_the_opera__library_by_katie_watersell_d31i0as-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NDAiLCJwYXRoIjoiXC9mXC81OGQxOWJlOS03NmY4LTQ2OTAtOTk0OC02ZjBiYTI0YWM1M2ZcL2QzMWkwYXMtMTc5MWFkM2UtZWYyYi00ZTY1LTk2YjUtOWNhMjk4YjhlZDI4LmpwZyIsIndpZHRoIjoiPD05MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.s0Odxrn-f99k7RTg-DZUk00-BiMdUTJamIskZlFw5pU" />
      )}
      {gameDetails.coordinates === '1,3' && (
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/db92e269-d292-4890-9058-43a1e04c8f98/daoai5z-d7ebcbff-c0af-4527-9238-11f6b24be8c8.png/v1/fill/w_1024,h_615,q_80,strp/mountain_shrine___game_scene_by_aleksandr_osm_daoai5z-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02MTUiLCJwYXRoIjoiXC9mXC9kYjkyZTI2OS1kMjkyLTQ4OTAtOTA1OC00M2ExZTA0YzhmOThcL2Rhb2FpNXotZDdlYmNiZmYtYzBhZi00NTI3LTkyMzgtMTFmNmIyNGJlOGM4LnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.6TXPBIvxT89HAVCwvLg1cOt3a_0l8oMd0xgEVx6tLk4" />
      )}

</BackgroundContainer>
)

}